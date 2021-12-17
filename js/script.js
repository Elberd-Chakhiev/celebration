let menu = document.querySelector(".navbar_menu2");
let burger = document.querySelector(".navbar_burger");
let forum = document.querySelector(".forum");
let button = document.querySelectorAll(".button");
let close = document.querySelector(".close");
let form = document.querySelector(".form");
let form_title = document.querySelector(".form_title");

button.forEach(function(item, i, button){
item.addEventListener("click", event =>{

forum.classList.remove("toggle");
});

});

burger.addEventListener("click",event =>{
menu.classList.toggle("toggle");
});

close.addEventListener("click", event =>{
forum.classList.remove("toggle");
});

forum.addEventListener("click", event =>{
const target = event.target.className;
if (target !== 'form_input' && target !== "form" && target !== "form_title" ) {
forum.classList.toggle("toggle");
}
});