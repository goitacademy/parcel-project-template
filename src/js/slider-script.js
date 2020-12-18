$(document).ready(function(){
  $('.slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    dotsClass: 'dots-slik'
  //   nextArrow: '<button type="button" class="arrow arrow-next"><svg class="arrow-icon"><use href="/images/sprite.svg#facebook"></use></svg></button>',
  // prevArrow: '<button type="button" class="arrow arrow-back"><svg  class="arrow-icon"><use href="./images/slider/arrow-back.svg"></use></svg></button>'
  });
});