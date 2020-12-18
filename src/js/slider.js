import Swiper from "./libs/swiper/swiper.min";
import '../css/swiper.min.css';

new Swiper('.reviews-slider', {
  slidesPerView: 1,
  speed: 1000,
  autoplay: {
    delay: 3000,
  },
  spaceBetween: 30,
  mousewheel: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
