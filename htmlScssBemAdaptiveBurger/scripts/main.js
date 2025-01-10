/*----переменные-------------------------------------------*/

const burgerBtn = document.getElementById("burger");
const nav = document.querySelector(".header__nav");
const body = document.body;

/*----код-------------------------------------------*/

burgerBtn.addEventListener("click", () => {
  nav.classList.toggle("header__nav--active");
  body.classList.toggle("no-scroll");
});
