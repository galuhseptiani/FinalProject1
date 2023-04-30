//membuat sticky navbar
const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 0);
});

//membuat responsive navbar
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
};

//membuat pop up
let popUp = document.querySelector("#open-popup").addEventListener("click", function(){
    document.body.classList.add("active-popup")
});

let closePopUp = document.querySelector(".popup .close-btn").addEventListener("click", function(){
    document.body.classList.remove("active-popup")
});

//variasi pada testimonial pics
$('.testimonial-pics img').click(function(){
    $(".testimonial-pics img").removeClass("active");
    $(this).addClass("active");

    $(".testimonial").removeClass("active");
    $("#"+$(this).attr("alt")).addClass("active");
});