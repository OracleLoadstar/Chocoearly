let footer_hover_animation = document.getElementById("footer");
let home_botton = document.getElementById("footer-home");
let local_button = document.getElementById("footer-local");
let cloud_button = document.getElementById("footer-cloud");
let setting_button = document.getElementById("footer-setting");
let status_button = document.getElementById("footer-status");

footer_hover_animation.addEventListener('mouseover', ()=>{
    footer_hover_animation.style.transform = "scale(1.05)";
    footer_hover_animation.style.transition = "transform 0.3s ease , box-shadow 0.3s ease";
    footer_hover_animation.style.boxShadow="0 5px 10px #60609280,0 0 10px -5px #60609280";
});

footer_hover_animation.addEventListener('mouseleave', ()=>{
    footer_hover_animation.style.transform = "scale(1)";
    footer_hover_animation.style.transition = "transform 0.3s ease , box-shadow 0.3s ease";
    footer_hover_animation.style.boxShadow="0 0 0 #60609280,0 0 10px -5px #60609280";
});

home_botton.addEventListener('mouseover', ()=>{
    home_botton.style.transform = "scale(1.2)";
    home_botton.style.transition = "transform 0.3s";
});

home_botton.addEventListener('mouseleave', ()=>{
    home_botton.style.transform = "scale(1)";
    home_botton.style.transition = "transform 0.3s";
});

local_button.addEventListener('mouseover', ()=>{
    local_button.style.transform = "scale(1.2)";
    local_button.style.transition = "transform 0.3s";
});
local_button.addEventListener('mouseleave', ()=>{
    local_button.style.transform = "scale(1)";
    local_button.style.transition = "transform 0.3s";
});

cloud_button.addEventListener('mouseover', ()=>{
    cloud_button.style.transform = "scale(1.2)";
    cloud_button.style.transition = "transform 0.3s";
});
cloud_button.addEventListener('mouseleave', ()=>{
    cloud_button.style.transform = "scale(1)";
    cloud_button.style.transition = "transform 0.3s";
});

setting_button.addEventListener('mouseover', ()=>{
    setting_button.style.transform = "scale(1.2)";
    setting_button.style.transition = "transform 0.3s";
});
setting_button.addEventListener('mouseleave', ()=>{
    setting_button.style.transform = "scale(1)";
    setting_button.style.transition = "transform 0.3s";
});

status_button.addEventListener('mouseover', ()=>{
    status_button.style.transform = "scale(1.2)";
    status_button.style.transition = "all 0.3s";
});
status_button.addEventListener('mouseleave', ()=>{
    status_button.style.transform = "scale(1)";
    status_button.style.transition = "all 0.3s";
});
