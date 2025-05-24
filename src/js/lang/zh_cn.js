const now = new Date();
const year = now.getFullYear();
const month = ('0' + (now.getMonth() + 1)).slice(-2);
const day = ('0' + now.getDate()).slice(-2);
const hours = ('0' + now.getHours()).slice(-2);
const minutes = ('0' + now.getMinutes()).slice(-2);
const seconds = ('0' + now.getSeconds()).slice(-2);


const formattedTime = year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds;
console.log(formattedTime);
console.log(hours);

// 12:00 16:00 
if (hours >= 12 && hours < 16) {
    dnytitle = "中午好！";
} else if (hours >= 16 && hours < 24) {
    dnytitle = "晚上好！";
} else {
    dnytitle = "早上好！";
};



let zh_cn = {
    "home-title-bar": dnytitle,
    "home-quick-start-upgrade" : `更新应用( ${canupgradeapp} )`,
    "home-quick-start-version": `了解 ${nowversion} 版本!`
}