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