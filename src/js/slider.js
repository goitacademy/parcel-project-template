
$(document).ready(function(){
  $('.big-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:true,
    speed: 1000,
    easing: 'ease',     
    waitForAnimate: false,
    autoplay: true,
    autoplaySpeed: 4000,
    asNavFor: ".small-slider",
  });
  $('.small-slider').slick({
    slidesToShow: 7,
  slidesToScroll: 0,
  centerMode: true,
  focusOnSelect: true,  
    asNavFor: ".big-slider",
  });
});


// $(document).ready(() => {
//   $('.big-slider').slick({   
//     dots:true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows:true,
//     speed: 1000,
//     easing: 'ease',     
//     waitForAnimate: false,
//     autoplay: false,
//     autoplaySpeed: 4000,
//     asNavFor: ".small-slider",
//     mobileFirst:true,
//     responsive: [
//       {
//         breakpoint: 767,
//         settings: {
//           dots:false,
//         },
//       }
//     ],
//    });

//   });