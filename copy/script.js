const hamburger = document.querySelector(".menu__hamburger");
const navBar = document.querySelector(".menu__open");
const bars = document.querySelectorAll(".menu__hamburger--bar");
// const topBar = document.querySelector(".menu__hamburger--bar:nth-child(1)");
// const midBar = document.querySelector(".menu__hamburger--bar:nth-child(2)");
// const botBar = document.querySelector(".menu__hamburger--bar:nth-child(3)");

function openNavBar(event) {
  navBar.classList.toggle("toggle");
  bars.forEach(function(bar) {
    bar.classList.toggle("menu__hamburger--toggle");
  });
  // topBar.classList.toggle("menu__hamburger--toggle");
  // midBar.classList.toggle("menu__hamburger--toggle");
  // botBar.classList.toggle("menu__hamburger--toggle");
}

hamburger.addEventListener("click", openNavBar);
