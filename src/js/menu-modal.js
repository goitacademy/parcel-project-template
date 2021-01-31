$(document).ready(function () {
  $('.menu-button').click(function (event) {
    $('.menu-button-icon,.burger-menu').toggleClass('menu-open');
    $('body').toggleClass('lock');
  });

  $('.header-btn').click(function (event) {
    $('.backdrop').removeClass('is-hidden');
    $('.modal-window').removeClass('animate__bounceOutRight');
    $('.modal-window').toggleClass('animate__bounceInRight');
  });

  $('.close-btn').click(function (event) {
    $('.backdrop').toggleClass('is-hidden');
    $('.modal-window').removeClass('animate__bounceInRight');
    $('.modal-window').toggleClass('animate__bounceOutRight');
  });
});
