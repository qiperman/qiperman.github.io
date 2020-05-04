import Swiper from "swiper";

require("swiper/css/swiper.min.css");

const leftButton = document.querySelector(".catalog__slider .slider__button_left");
const rightButton = document.querySelector(".catalog__slider .slider__button_right");
const dotsWrapper = document.querySelector(".catalog__slider .slider__dots");

const reviewsSlider = new Swiper(".js-catalog", {
  loop: true,
  slidesPerView: "auto",
  spaceBetween: 30,
  direction: "horizontal",
  navigation: {
    nextEl: rightButton,
    prevEl: leftButton
  },
  pagination: {
    el: dotsWrapper
  }
});

export default reviewsSlider;
