 $(".item .link").click(function() {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({
        scrollTop: destination
    }, 1500);
     jQuery(".menu-burger .item").on("click", function () {
         jQuery(".menu-burger").removeClass("is-open").slideUp();
         jQuery(".body").removeClass("is-active");
         jQuery(".header-logo").removeClass("is-open");
         jQuery(".burger-button").removeClass("is-open is-active");
         return false;
     });
 });