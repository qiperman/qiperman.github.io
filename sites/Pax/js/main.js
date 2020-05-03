let menuButton = document.getElementById("menu-togler");
let html = document.getElementsByTagName("html")[0];

menuButton.addEventListener("click", () => {
  menuButton.classList.toggle("active");
  html.classList.toggle("menu_opened");
});

document.addEventListener("click", function(event) {
  const header = document.querySelector("header");
  let targetElement = event.target;

  if (header.contains(targetElement)) return;

  menuButton.classList.remove("active");
  html.classList.remove("menu_opened");
});
