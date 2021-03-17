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
        trigger1 = $('.hamburger'),
            overlay1 = $('.overlay'),
            wrapper = $('#wrapper');
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 777);
        e.preventDefault();
        trigger1.removeClass('is-open');
        trigger1.addClass('is-closed');
        wrapper.removeClass('toggled');
        overlay1.hide();
        return false;
    });
});