let dnytitle;
let canupgradeapp = 0;
let lang = zh_cn;

const lang_ = navigator.language

if (lang_ == "zh-CN" || lang_ == "zh-TW") {
    lang = zh_cn;
}
else if (lang_ == "en-US" || lang_ == "en-GB") {
    lang = en_us;
}