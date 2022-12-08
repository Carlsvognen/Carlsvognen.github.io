//scrip borrowed by © ljc-dev https://dev.to/ljcdev/easy-hamburger-menu-with-js-2do0

const navMenu = document.querySelector(".navMenu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger = document.querySelectorAll(".hamburger");
const openOpt = document.querySelectorAll(".openOpt");
const closeOpt = document.querySelectorAll(".closeOpt");

function toggleMenu() {
    if (navMenu.classList.contains("menuVisability")){
        navMenu.classList.remove("menuVisability");
        closeOpt.style.display = "none";
        openOpt.style.display = "block";
    } else {
        navMenu.classList.add("menuVisability");
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