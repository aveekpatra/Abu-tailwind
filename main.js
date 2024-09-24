
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


// JavaScript to toggle the menu
const menuButton = document.getElementById("menuButton");
const menu = document.getElementById("menu");
const lines = menuButton.querySelectorAll("span");

menuButton.addEventListener("click", () => {
  // Toggle line transformations to create the cross (X) effect
 lines[0].classList.toggle("rotate-45");
 lines[0].classList.toggle("translate-y-2");

 // Middle line
 lines[1].classList.toggle("opacity-0");

 // Bottom line
 lines[2].classList.toggle("-rotate-45");
 lines[2].classList.toggle("-translate-y-2");
    
  menu.classList.toggle("hidden");
});
