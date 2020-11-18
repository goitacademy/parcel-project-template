$(document).ready(function(){
  $('.small-slider').slick({
    slidesToShow: 3,
    variableWidth: true,
    asNavFor: ".big-slider",
    mobileFirst: true
  });
  $('.big-slider').slick({
    arrows: false,
    asNavFor: ".small-slider",
    slidesToShow: 1
  });
});

