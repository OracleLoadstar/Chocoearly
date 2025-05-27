const btn = document.getElementById('footer-status');
const card = document.getElementById('statuscard');
const footer = document.getElementById('footer');
const hide = document.getElementById('statuscard-hide');

btn.addEventListener('mousedown', ()=>{
    card.style.bottom="16px";
    footer.style.bottom="-56px";
    footer.style.transition="bottom 0.5s ease"
});
hide.addEventListener('mousedown', ()=>{
    card.style.bottom="-1000px";
    footer.style.bottom="20px";
    footer.style.transition="bottom 0.5s ease"
});