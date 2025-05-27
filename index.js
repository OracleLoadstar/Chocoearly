const { app, BrowserWindow } = require('electron');
const path = require('path');
const { ipcMain } = request('electron');
const { exec } = require('child_process');
const { log, error } = require('console');
const { stdout, stderr } = require('process');


function createWindow() {
    let win = new BrowserWindow({
        width: 1000,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });
    
    win.loadFile('./src/index.html');
    win.setMenu(null); // Disable the menu bar
    win.setMinimumSize(1000,600);
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});

// https://docs.chocolatey.org/en-us/community-repository/api/
const command = '(choco search --limit-output) -split \"`n\" | ForEach-Object { if ($_) { $n,$v=$_ -split\'\\|\',2; [PSCustomObject]@{Name=$n;Version=$v} } } | ConvertTo-Json';
ipcMain.on('get_item',(event , command)=>{
    exec(command, (error, stdout , stderr) => {
        if (error) {
            console.error('Error executing command:', error);
            event.reply('get_item_response', { success: false, error: stderr });
            return;
        }
        event.reply('get_item_response', { success: true, data: JSON.parse(stdout) });
    });
});
