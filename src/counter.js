$(document).ready(function () {
    $('.counter-number').spincrement({
        thousandSeparator: "",
        duration: 10000,
        delay: 6000
    });
});

$(document).ready(function () {
    $('.advantages__text').spincrement({
        thousandSeparator: "",
        duration: 10000,
        delay: 10000
    });
});

$(document).ready(function () {
    $("a[href*=#]").on("click", function (e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 777);
        e.preventDefault();
        return false;
    });
});