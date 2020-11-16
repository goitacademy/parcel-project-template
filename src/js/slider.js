$(document).ready(function(){
  $('.small-slider').slick({
    slidesToShow: 1,
    variableWidth: true,
    asNavFor: ".big-slider"
  });
  $('.big-slider').slick({
    arrows: false,
    asNavFor: ".small-slider"
  });
});

