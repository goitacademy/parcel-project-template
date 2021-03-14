$(document).ready(function() {
    $('.slider').slick({
        arrows: false,
        dots: true,
        adaptiveHeight: true,
        draggable: false,
        mobileFirst:true,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    autoplay:true,
                    autoplaySpeed:5000
                }
            }
        ]
        
    });
});