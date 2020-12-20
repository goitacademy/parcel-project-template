$(document).ready(function(){
    $("#menu-nav").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 500);
    });

    $(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
    $('.scrollup').fadeIn();
    } else {
    $('.scrollup').fadeOut();
    }
    });
     
    $('.scrollup').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
    });

});


// $(document).ready(function(){
 
 
// });