const hamburger = document.querySelector(".menu__hamburger");
const navBar = document.querySelector(".menu__open");
console.log(hamburger);

function openNavBar(event) {
  navBar.classList.toggle("toggle");
}

hamburger.addEventListener("click", openNavBar);
