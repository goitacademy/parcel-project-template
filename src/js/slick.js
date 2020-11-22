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
    asNavFor: '#gallery',
    responsive: [
    
    {
       breakpoint: 728,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
      }
      }
    ]

});
  $('#gallery').slick({
    asNavFor: '#reviews-slider',
    responsive: [
    
    {
       breakpoint: 728,
        settings: {
        asNavFor: '#reviews-slider',
        arrows: true,
        centerMode: false,
        infinite: true,
        focusOnSelect: true,
        slidesToShow: 3,
        slidesToScroll: 1
      }
      },
       {
       breakpoint: 4000,
        settings: {
        asNavFor: '#reviews-slider',
        arrows: false,
        centerMode: false,
        infinite: true,
        focusOnSelect: true,
        slidesToShow: 6,
        slidesToScroll: 1
      }
      }
      
  ]
  // slidesToShow: 3,
  // slidesToScroll: 1,
  // asNavFor: '#reviews-slider',
  // dots: false,
  // centerMode: false,
  // focusOnSelect: true
});
    
    
});




		