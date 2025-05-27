
// 12:00 16:00 
if (hours >= 12 && hours < 16) {
    dnytitle = "中午好！";
} else if (hours >= 16 && hours < 24) {
    dnytitle = "晚上好！";
} else {
    dnytitle = "早上好！";
};



window.zh_cn = {
    "home-title-bar": dnytitle,
    "home-quick-start-upgrade" : `更新应用( ${canupgradeapp} )`,
    "home-quick-start-version": `了解 ${nowversion} 版本!`
}