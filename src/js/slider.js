$(document).ready(function () {
    $('.slider').slick({
        dots: true,
        autoplay: true,
        // autoplaySpeed: 3000
        pauseOnFocus: true,
        appendDots: $('.custom-dots'),
        responsive: [{
            breakpoint: 420,
            settings: {

            }
        }
        ]
    });
});