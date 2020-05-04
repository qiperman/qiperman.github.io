import Viewer from "viewerjs";

require("viewerjs/dist/viewer.css");

const viewers = [];

const catalogWrapper = document.querySelector(".catalog__slider");

const items = catalogWrapper.querySelectorAll(".catalog__item");

items.forEach((item) => {
  viewers.push(new Viewer(item.querySelector(".catalog__item-additional-images")));
});


export default viewers;
