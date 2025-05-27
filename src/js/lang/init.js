
if (lang_ == "zh-CN" || lang_ == "zh-TW") {
    lang = window.zh_cn;
    // reflash_langguage();
}
else if (lang_ == "en-US" || lang_ == "en-GB") {
    lang = window.en_us;
} else {
    lang = window.zh_cn;
}
reflash_langguage();