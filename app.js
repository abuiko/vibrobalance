// const burger = document.querySelector("#btnHamburger");
// const header = document.querySelector(".header");
// const overlay = document.querySelector(".overlay");
// const fadeElems = document.querySelectorAll(".has-fade");
// const body = document.querySelector("body");
const burger = document.querySelector("#btnHamburger");
const nav = document.querySelector(".header");
const popup = document.querySelector(".header__popup");

burger.addEventListener("click", () => {
  nav.classList.toggle("open");
  popup.classList.toggle("active");
});