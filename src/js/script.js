$(document).ready(function(){
  $('.slider').slick({
    arrows: false,
    dots: false,
    adaptiveHeight: true,
     autoplay: true,
     autoplaySpeed: 2000,
    infinite: true,
    slidesToShow: 1,
    mobileFirst: true,
    prevArrow:'<button type="button" class="slick-prev">Назад</button>',
   nextArrow:'<button type="button" class="slick-next">Вперед</button>',
    responsive: [
    {
      breakpoint: 767,
      settings: {
        arrows: true,
    dots: true,
    
      }
    },
  ]
  });
  
});