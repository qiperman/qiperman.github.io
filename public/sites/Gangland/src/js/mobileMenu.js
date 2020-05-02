const burgerActiveClass = "burger_active";
const menuActiveClass = "mobile-menu_active";
const burger = document.querySelector(".burger");
const menu = document.querySelector(".mobile-menu");


burger.addEventListener("click", () => {
  if (burger.classList.contains(burgerActiveClass)) {
    document.body.style.overflow = "auto";
    burger.classList.remove(burgerActiveClass);
    menu.classList.remove(menuActiveClass);
  } else {
    document.body.style.overflow = "hidden";
    burger.classList.add(burgerActiveClass);
    menu.classList.add(menuActiveClass);
  }
});
