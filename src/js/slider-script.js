
$(document).ready(function(){
  /*Большой слайдер*/
  $('.slider-content').slick({
      adaptiveHeight: true,
      asNavFor: $('.bullets-slider'),
      infinite: true,
      arrows: false
  });

  /*Мелкий слайдер*/
  $('.bullets-slider').slick({
    adaptiveHeight: true,
    // centerMode: true,
    slidesToShow: 5,
    slideToScroll: 1,
    asNavFor: $('.slider-content'),
    infinite: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 320, //min-width
        settings: {
          slidesToShow: 3,
          slideToScroll: 1
        }
      }
      ,
      {breakpoint: 768,
        settings: {
          slidesToShow: 5,
          slideToScroll: 1
        }
      }
    ],
    mobileFirst: true, //для min-width - иначе будет max-width
    arrows: true

});
});
