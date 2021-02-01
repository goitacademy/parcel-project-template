$(document).ready(function () {
  $('.slider').slick({
    arrows: false,
    slidesToShow: 1,
    // fade: true
    asNavFor: '.wrapper',
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          arrows: true,
        },
      },
    ],
  });
  $('.wrapper').slick({
    arrows: true,
    slidesToShow: 3,
    asNavFor: '.slider',
    mobileFirst: true,
    focusOnSelect: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 6,
          arrows: false,
        },
      },
    ],
  });

  $('.wrapper').slick('setPosition');
});
