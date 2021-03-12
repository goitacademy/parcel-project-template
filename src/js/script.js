$(document).ready(function () {
    $('.slider').slick(
        {
            arrows: false,
            dots: true,
            speed: 500,
            infinite: false,
            autoplay: true,
            autoplaySpeed: 5000,
            pauseOnDotsHover: true,
            // appendDots:$('.sviper-dots'),
        }
    );
});