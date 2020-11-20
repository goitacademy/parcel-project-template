$(document).ready(function () {
    
//     $('#reviews-slider').slick({
//         //   rtl: true
//         asNavFor: '#gallery'
//     });
//     $('#gallery').slick({
//          responsive: [
//     {
//       breakpoint: 768,
//       settings: {
//         arrows: false,
//         centerMode: false,
//         infinite: true,
//           slidesToShow: 3,
//             slidesToScroll: 3
//       }
//              },
//                 {
//       breakpoint: 2000,
//       settings: {
//         arrows: false,
//           centerMode: false,
//         infinite: false,
//           slidesToShow: 7,
//             slidesToScroll: 3,
//       }
//              }
//   ]
//     });
    
    
    $('#reviews-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '#gallery'
});
$('#gallery').slick({
  slidesToShow: 7,
  slidesToScroll: 1,
  asNavFor: '#reviews-slider',
  dots: false,
  centerMode: true,
  focusOnSelect: true
});
    
    
});




		