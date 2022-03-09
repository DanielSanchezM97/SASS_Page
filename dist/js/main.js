const menuBtn = document.querySelector(".menu-btn");
const hamburger = document.querySelector(".menu-btn__burger");
const nav = document.querySelector(".nav");
const menuNav = document.querySelector(".menu-nav");
const navItems = document.querySelectorAll(".menu-nav__item");

let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    hamburger.classList.add("open"); // add the word open to the class list
    nav.classList.add("open"); // add the word open to the class list
    menuNav.classList.add("open"); // add the word open to the class list
    navItems.forEach((item) => item.classList.add("open")); // loop through the nav items and add the word open to the class list

    showMenu = true;
  } else {
    hamburger.classList.remove("open"); // remove the word open from the class list
    nav.classList.remove("open"); // remove the word open from the class list
    menuNav.classList.remove("open"); // remove the word open from the class list
    navItems.forEach((item) => item.classList.remove("open")); // loop through the nav items and remove the word open from the class list

    showMenu = false;
  }
}
