$(document).ready(function () {
  $('.slider-container').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    // fade: true,
    speed: 700,
    asNavFor: '.slider-list',
    responsive: [
      {
        breakpoint: 767,
        settings: {
          arrows: false,
        },
      },
    ],
  });
  $('.slider-list').slick({
    infinite: false,

    speed: 100,
    focusOnSelect: true,
    slidesToShow: 7,
    slidesToScroll: 7,
    asNavFor: '.slider-container',
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
});
