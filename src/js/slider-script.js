
$(document).ready(function(){
  /*Большой слайдер*/
  $('.slider-content').slick({
      adaptiveHeight: true,
      asNavFor: $('.bullets-slider'),
      infinite: true,
      arrows: true
  });

  /*Мелкий слайдер*/
  $('.bullets-slider').slick({
    adaptiveHeight: true,
    // centerMode: true,
    slidesToShow: 7,
    slideToScroll: 1,
    asNavFor: $('.slider-content'),
    infinite: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 321, //min-width
        settings: {
          slidesToShow: 3,
          slideToScroll: 1
        },
        breakpoint: 768,
        settings: {
          infinite: false,
          focusOnSelect: false
        }
      }
    ],
    // mobileFirst: true, //для min-width - иначе будет max-width
    arrows: true

});
});
