//scrip borrowed by © ljc-dev https://dev.to/ljcdev/easy-hamburger-menu-with-js-2do0

const globalNav = document.querySelector(".globalNav");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger = document.querySelector(".hamburger");
const menuIcon = document.querySelector(".menuIcon");
const closeIcon = document.querySelector(".closeIcon");

function toggleMenu() {
    if (globalNav.classList.contains("menuVisability")){
        globalNav.classList.remove("menuVisability");
        closeIcon.style.display = "none";
        menuIcon.style.display = "block";
    } else {
        globalNav.classList.add("menuVisability");
        closeIcon.style.display = "block";
        menuIcon.style.display = "none";
    }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach(
    function(menuItem) {
        menuItem.addEventListener("click", toggleMenu);
    }
)