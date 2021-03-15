
$(function  () {
   $(window).scroll(function() {
       $('.skill-time').each(function(){
           var imagePos = $(this).offset().top;

          var topOfWindow = $(window).scrollTop();
          if (imagePos < topOfWindow+650) {
            $(this).addClass("fadeInLeft");
           }
       });
   });
   $(window).scroll(function() {
    $('.skill-travel').each(function(){
        var imagePos = $(this).offset().top;

       var topOfWindow = $(window).scrollTop();
       if (imagePos < topOfWindow+650) {
         $(this).addClass("fadeInUp");
        }
    });
});
$(window).scroll(function() {
    $('.skill-gold').each(function(){
        var imagePos = $(this).offset().top;

       var topOfWindow = $(window).scrollTop();
       if (imagePos < topOfWindow+650) {
         $(this).addClass("fadeInRight");
        }
    });
});
})




