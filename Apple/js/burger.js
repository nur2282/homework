const burgerBtn = document.querySelector(".header__burger");
const headerMenu = document.querySelector(".header__menu");
const body = document.querySelector(".page__body");
const overlay = document.querySelector(".overlay");
const headerMenuLinks = document.querySelectorAll(".menu__link, .header__dropdown-link");
const dropDownBtn = document.querySelector(".header__dropdown-btn");
const dropDownContent = document.querySelector(".header__dropdown-list");

burgerBtn.addEventListener("click", () => {
  burgerBtn.classList.toggle("burger--open");
  headerMenu.classList.toggle("header__menu--open");
  body.classList.toggle("page__body--no-scroll");
  overlay.classList.toggle("overlay--active");
});

function closeMenu() {
  burgerBtn.classList.remove("burger--open");
  headerMenu.classList.remove("header__menu--open");
  body.classList.remove("page__body--no-scroll");
  overlay.classList.remove("overlay--active");
  dropDownContent.classList.remove("header__dropdown--active");
}

overlay.addEventListener("click", closeMenu);

headerMenuLinks.forEach(item => {
  item.addEventListener("click", closeMenu);
});

dropDownBtn.addEventListener("click", () => {
  dropDownContent.classList.toggle("header__dropdown--active");
});
