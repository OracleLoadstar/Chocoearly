const nowversion = "1.0.0";
let dnytitle;
let canupgradeapp = 0;
let lang = window.zh_cn;
let langchange_arr = ["home-title-bar","home-quick-start-upgrade","home-quick-start-version"];
const lang_ = navigator.language
const now = new Date();
const year = now.getFullYear();
const month = ('0' + (now.getMonth() + 1)).slice(-2);
const day = ('0' + now.getDate()).slice(-2);
const hours = ('0' + now.getHours()).slice(-2);
const minutes = ('0' + now.getMinutes()).slice(-2);
const seconds = ('0' + now.getSeconds()).slice(-2);


const formattedTime = year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds;
