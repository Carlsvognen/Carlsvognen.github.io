//scrip borrowed by © ljc-dev https://dev.to/ljcdev/easy-hamburger-menu-with-js-2do0

const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger = document.querySelectorAll(".hamburger");
const openOpt = document.querySelectorAll(".openOpt");
const closeOpt = document.querySelectorAll(".closeOpt");

function toggleMenu() {
    if (menu.classList.contains("menuVisability")){
        menu.classList.remove("menuVisability");
        closeOpt.style.display = "none";
        openOpt.style.display = "block";
    } else {
        menu.classList.add("menuVisability");
        closeIcon.style.display = "block";
        openOpt.style.display = "none";
    }
}
hamburger.addEventListener("click", toggleMenu);

menuItems.forEach(
    function(menuItem) {
        menuItem.addEventListener("click", toggleMenu);
    }
)