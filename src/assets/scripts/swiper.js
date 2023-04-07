import Swiper from "swiper/swiper-bundle.esm.js";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/swiper-bundle.css";
var swiper = new Swiper(".mySwiper", {
  autoplay: {
    delay: 6000,
  },
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
