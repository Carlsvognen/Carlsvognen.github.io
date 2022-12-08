//scrip borrowed by © ljc-dev https://dev.to/ljcdev/easy-hamburger-menu-with-js-2do0

const globalNav = document.querySelector(".globalNav");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger = document.querySelector(".hamburger");
const openOpt = document.querySelector(".openOpt");
const closeOpt = document.querySelector(".closeOpt");

function toggleMenu() {
    if (globalNav.classList.contains("menuVisability")){
        navMenu.classList.remove("menuVisability");
        closeOpt.style.display = "none";
        openOpt.style.display = "block";
    } else {
        globalNav.classList.add("menuVisability");
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