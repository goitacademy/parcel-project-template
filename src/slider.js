$(document).ready(function () {
    $('.slider').slick();
});

$(document).ready(function () {
    $('.slider2').slick();
});


$('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    // arrows: false,
    // fade: true,
    asNavFor: '.slider2'
  });
  $('.slider2').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider',
    // centerMode: true,
    // focusOnSelect: true
  });