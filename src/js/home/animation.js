const updata_card = document.getElementById('updata');
const show_updata_btn = document.getElementById('home-quick-start-version');
const hide_updata_btn = document.getElementById('updata-hide');

show_updata_btn.addEventListener('mousedown' , ()=>{
    updata_card.style.opacity='1';
    updata_card.style.right='0px';
});
hide_updata_btn.addEventListener('mousedown' , ()=>{
    updata_card.style.right='calc(-60vw - 30px)';
    updata_card.style.opacity='1';
});
