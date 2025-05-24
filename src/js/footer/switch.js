// This file is used to manage the global variables and functions
home_botton.addEventListener('click', ()=>{
    document.getElementById("cloud").style.display = "none";
    document.getElementById("local").style.display = "none";
    document.getElementById("setting").style.display = "none";
    document.getElementById("home").style.display = "block";
});

local_button.addEventListener('click', ()=>{
    document.getElementById("cloud").style.display = "none";
    document.getElementById("setting").style.display = "none";
    document.getElementById("home").style.display = "none";
    document.getElementById("local").style.display = "block";
});

cloud_button.addEventListener('click', ()=>{
    document.getElementById("local").style.display = "none";
    document.getElementById("setting").style.display = "none";
    document.getElementById("home").style.display = "none";
    document.getElementById("cloud").style.display = "block";

});

setting_button.addEventListener('click', ()=>{
    document.getElementById("cloud").style.display = "none";
    document.getElementById("local").style.display = "none";
    document.getElementById("home").style.display = "none";
    document.getElementById("setting").style.display = "block";

});