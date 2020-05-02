import Swiper from "swiper";

require("swiper/swiper.scss");

const slides = new Swiper(".swiper-container", {
  slidesPerView: 5,
  loop: true,
  breakpoints: {
    1100: {
      slidesPerView: 5,
      spaceBetween: 50
    },
    768: {
      slidesPerView: 4.5,
      spaceBetween: 50
    },
    576: {
      slidesPerView: 3.5,
      spaceBetween: 40
    },
    320: {
      slidesPerView: 3.5,
      spaceBetween: 40
    },
    220: {
      slidesPerView: 1.2,
      spaceBetween: 20
    }
  }
});

export default slides;
