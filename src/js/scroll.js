$(document).ready(function() {
  $("a.scrollto").click(function() {
    // console.log(this);
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({
        scrollTop: destination
    }, 500);
    return false;
  });
});
