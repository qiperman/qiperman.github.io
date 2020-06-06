function ibg() {
  const ibgElement = document.querySelectorAll(".ibg");
  for (let i = 0; i < ibgElement.length; i += 1) {
    if (ibgElement[i].querySelector("img")) {
      ibgElement[i].style.backgroundImage = `url(${ibgElement[i].querySelector("img").getAttribute("src")})`;
    }
  }
}

ibg();
