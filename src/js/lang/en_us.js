
// 12:00 16:00 
if (hours >= 12 && hours < 16) {
    dnytitle = "Good afternoon!";
} else if (hours >= 16 && hours < 24) {
    dnytitle = "Good evening!";
} else {
    dnytitle = "Good morning!";
};



window.en_us = {
    "home-title-bar": dnytitle,
    "home-quick-start-upgrade" : `Upgrade( ${canupgradeapp} )`,
    "home-quick-start-version": `Learn about ${nowversion} version !`
}