
function reflash_langguage() {
    langchange_arr.forEach(element => {
        let langElement = document.getElementById(element);
        if (langElement) {
            langElement.textContent = lang[element];
        }
    });
}