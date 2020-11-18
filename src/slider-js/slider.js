$(document).ready(function(){
    $('.slider').slick({
        dots: true,
        // autoplay: true,
        pauseOnFocus: true,
        pauseOnHover: true,
        slidesToShow: 1,
        centerMode: true,
        waitForAnimate: false,
        focusOnSelect: true,
        fade: true,
        
       
    });
});

// $(document).ready(function(){
//     $('.slider-thumbnail').slick({
//         dots: false,
//         arrows: false,
//         speed: 800,
//         autoplay: false,
//         pauseOnFocus: true,
//         pauseOnHover: true,
//         slidesToShow: 7,
//         centerMode: true,
//         waitForAnimate: false,
//         focusOnSelect: true,
//         asNavFor:".slider-active",
//         responsive:[{
//             breakpoint: 767,
//         	settings: {
//                 slidesToShow:3,
//                 arrows: true,
//             }
//         }			
//         ]
//     });
//     $('.slider-active').slick({
//         dots: false,
//         arrows: true,
//         speed: 800,
//         autoplay: true,
//         autoplaySpeed: 3000,
//         pauseOnFocus: true,
//         pauseOnHover: true,
//         waitForAnimate: false,
//         fade: true,
//         asNavFor:".slider-thumbnail",
//         responsive:[{
//             breakpoint: 767,
//         	settings: {
//                 slidesToShow: 1,
//                 arrows: false,
//             }
//         }			
//         ]
//     });
// });