
$("a[href=#program-study]").on("click", function (e) {
    var anchor = $(this);
    $('html, body').stop().animate({
    scrollTop: $(anchor.attr('href')).offset().top
    }, 800);
    e.preventDefault();
    return false;
    });