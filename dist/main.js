/**
 * PRELOAD
 *
 * loading will be end after document is loaded
 */

const preloader = document.querySelector("[data-preaload]");

window.addEventListener("load", function () {
  setTimeout(() => {
    preloader.classList.add("loaded");
  }, 350);
  document.body.classList.add("loaded");
});

// JavaScript to toggle the menu and navbar
const menuButton = document.getElementById("ham-menu");
const navlinks = document.getElementById("nav-links");
const body = document.body;
menuButton.addEventListener("click", () => {
  menuButton.classList.toggle("ham-clicked");

  if (window.innerWidth < 640) {
    if (navlinks.style.height == "700px") {
      navlinks.style.height = "0px";
    } else {
      navlinks.style.height = "700px";
    }
  } else {
    navlinks.classList.toggle("h-0");
    navlinks.classList.toggle("h-14");
  }
});

// for mobile
navlinks.addEventListener("click", () => {
  if (navlinks.style.height == "700px") {
    menuButton.classList.toggle("ham-clicked");
    navlinks.style.height = "0px";
  }
});

// Main logo click
logo = document.getElementById("logo-main");
logo.addEventListener("click", () => {
  document.location.reload();
});
