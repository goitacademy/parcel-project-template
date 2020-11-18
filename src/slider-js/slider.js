$(document).ready(function(){
    $('.slider').slick({
        dots: true,
        autoplay: true,
        pauseOnFocus: true,
        pauseOnHover: true,
        slidesToShow: 1,
        centerMode: true,
        waitForAnimate: false,
        focusOnSelect: true,
        fade: true,
        appendDots: $('.thumbnail'),
        responsive: [{
            breakpoint: 320,
            settings: {}
        }]  
    });
});
