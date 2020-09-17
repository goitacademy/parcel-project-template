import $ from 'jquery';
import 'slick-carousel';
import './sass/main.scss';
import './modal.js';

$(document).ready(() => {
  const phoneWidth = 320;
  const tabletWidth = 768;
  const desktopWidth = 1314;

  $('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    asNavFor: '.slider-nav',
  });

  $('.slider-nav').slick({
    dots: false,
    slidesToShow: 4,
    asNavFor: '.slider',
    arrows: false,
    slidesToShow: 7,
    slidesToScroll: 1,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: tabletWidth,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
