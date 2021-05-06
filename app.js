const burger = document.querySelector("#btnHamburger");
const nav = document.querySelector(".header");
const popup = document.querySelector(".header__popup");
const span = document.querySelectorAll(".header__toggle span");

burger.addEventListener("click", () => {
  nav.classList.toggle("open");
  popup.classList.toggle("active");

  if (nav.classList.contains("open")) {
    span.forEach(item => {
      item.style.backgroundColor = "#000";
    })
  } else {
    span.forEach(item => {
      item.style.backgroundColor = "#fff";
    })
  }

});