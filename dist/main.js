/**
 * PRELOAD
 *
 * loading will be end after document is loaded
 */

const preloader = document.querySelector("[data-preaload]");

window.addEventListener("load", function () {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
});

// JavaScript to toggle the menu and navbar
const navbar = document.getElementById("topbar");
const menuButton = document.getElementById("ham-menu");
const navlinks = document.getElementById("nav-links");
const body = document.body;
menuButton.addEventListener("click", () => {
  menuButton.classList.toggle("ham-clicked");
  navbar.classList.remove("bg-transparent");

  if (window.innerWidth < 900) {
    if (navlinks.style.height == "100vh") {
      navlinks.style.height = "0px";
    } else {
      navlinks.style.height = "100vh";
    }
  } else {
    navlinks.classList.toggle("h-0");
    navlinks.classList.toggle("h-14");
  }
});

// for mobile
navlinks.addEventListener("click", () => {
  if (navlinks.style.height == "100vh") {
    menuButton.classList.toggle("ham-clicked");
    navlinks.style.height = "0px";
  }
});

// Main logo click
logo = document.getElementById("logo-main");
logo.addEventListener("click", () => {
  document.location.reload(true);
});

// navbar color change on scroll
window.onscroll = function () {
  if (window.scrollY > 0) {
    navbar.classList.remove("bg-transparent");
    navbar.classList.add("shadow-md");
  } else {
    navbar.classList.add("bg-transparent");
    navbar.classList.remove("shadow-md");
  }
};
