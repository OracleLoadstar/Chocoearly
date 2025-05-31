const update_card = document.getElementById('update');
const show_update_btn = document.getElementById('home-quick-start-version');
const hide_update_btn = document.getElementById('update-hide');

show_update_btn.addEventListener('mousedown' , ()=>{
    update_card.style.opacity='1';
    update_card.style.right='0px';
});
hide_update_btn.addEventListener('mousedown' , ()=>{
    update_card.style.right='calc(-60vw - 30px)';
    update_card.style.opacity='1';
});
