$(document).ready(function () {
    $('.slider').slick(
        {
            arrows: true,
            dots: true,
            speed: 500,
            infinite: false,
            autoplay: true,
            autoplaySpeed: 3000,
            pauseOnDotsHover: true,
            // appendDots:$('.sviper-dots'),
        }
    );
});