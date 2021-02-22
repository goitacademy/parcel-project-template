$(document).on("click", "nav a", function(e) {
    e.preventDefault();
    var id  = $(this).attr('href');
    var top = $(id).offset().top; // получаем координаты блока
    $('body, html').animate({scrollTop: top}, 700); // плавно переходим к блоку
});