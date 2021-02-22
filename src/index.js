import './sass/main.scss';

$(document).ready(function () {
  $('.reviews-list').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow:1,
  });
});
