
$(document).ready(function(){
  $('.slider').slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:true,
    speed: 1000,
    easing: 'ease',     
    waitForAnimate: false,
    autoplay: true,
    autoplaySpeed: 4000,
     responsive: [
      {
         breakpoint: 767,
        settings: {
          arrows:false,
          dots: false,
          waitForAnimate: true,
          asNavFor: ".small-slider",
        },
      }
    ],
    
  });
  $('.small-slider').slick({
     responsive: [
      {
         breakpoint: 767,
         settings: {
          adaptiveHeight: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: 20,
          speed: 1000,
          easing: 'ease',     
          waitForAnimate: true,
          focusOnSelect: true,  
          asNavFor: ".slider",
        },
      }
    ],
  });
});

