$(document).ready(function() {
    $('.burger-btn').click(function() {
        $('.burger-btn').toggleClass('open-menu');
        $('.burger__menu').toggleClass('open-menu');
    });
});