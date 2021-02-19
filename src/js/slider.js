$(document).ready(function () {
  $slideshow = $('.slider-first').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 25000,
    mobileFirst: false,
    asNavFor: '.slider-two',
  });
  $('.slider-two').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.slider-first',
    arrows: false,
    dots: true,
  });

  $('.slider-box__card').click(function () {
    $slideshow.slick('slickNext');
  });
});

