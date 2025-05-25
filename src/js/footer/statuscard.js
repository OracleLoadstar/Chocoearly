const btn = document.getElementById('footer-status');
const card = document.getElementById('statuscard');
const footer = document.getElementById('footer');
const hide = document.getElementById('statuscard-hide');

btn.addEventListener('mousedown', ()=>{
    card.style.bottom="16px";
    footer.style.bottom="-56px";
});
hide.addEventListener('mousedown', ()=>{
    card.style.bottom="-1000px";
    footer.style.bottom="20px";
});