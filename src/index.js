import "./sass/main.scss";
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';
const mySwiper = new Swiper('.image-slider', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
}
);