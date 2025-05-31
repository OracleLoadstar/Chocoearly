// 导入 Electron 的 ipcRenderer 模块
// 由于 nodeIntegration: true 和 contextIsolation: false，可以直接在渲染器进程中使用 require
const { ipcRenderer } = require('electron');

// 获取 DOM 元素
const getPackagesBtn = document.getElementById('getPackagesBtn');
const responseOutput = document.getElementById('responseOutput');

// 定义要执行的 PowerShell 命令
// 这个命令会搜索 Chocolatey 包，格式化为 JSON
// 注意：这个命令需要在 Windows 系统且安装了 Chocolatey 的环境下才能成功执行
const chocoCommand = 'powershell -Command "& { (choco search --limit-output) | ForEach-Object { $_.ToString().Trim() } | Where-Object { $_ -match \'^(?<Name>[^|]+)\\|(?<Version>[^|]+)$\' } | ForEach-Object { $matchResult = $Matches; [PSCustomObject]@{ Name = $matchResult.Name.Trim(); Version = $matchResult.Version.Trim() } } | ConvertTo-Json -Depth 100 -Compress }"';

// 为按钮添加点击事件监听器
getPackagesBtn.addEventListener('click', () => {
    responseOutput.textContent = '正在获取 Chocolatey 包列表，请稍候...';
    // 向主进程发送 'get_item' 消息，并附带要执行的命令
    ipcRenderer.send('get_item', chocoCommand);
});

// 监听来自主进程的 'get_item_response' 消息
ipcRenderer.on('get_item_response', (event, response) => {
    if (response.success) {
        // 如果成功，显示 JSON 格式的数据
        responseOutput.textContent = '成功获取数据：\n' + JSON.stringify(response.data, null, 2);
        responseOutput.classList.remove('error'); // 移除错误样式
    } else {
        // 如果失败，显示错误信息
        responseOutput.textContent = '获取数据失败：\n' + response.error;
        responseOutput.classList.add('error'); // 添加错误样式
        console.error('Renderer received error:', response.error);
    }
});