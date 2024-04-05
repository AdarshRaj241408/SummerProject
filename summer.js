console.log("Hello");
let username = document.querySelector('.compose_box');

function hideComposeBox() {
    username.style.display= "none";
}
function showComposeBox(){
    username.style.display="block";
}
let yoyo = document.querySelector('.emailRow');

function transfer(){
    window.location.href="discord.html";
}