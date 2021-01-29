$(document).ready(function () {
  $('.menu-button').click(function (event) {
    $('.menu-button-icon,.menu-container').toggleClass('menu-open');
    $('body').toggleClass('lock');
  });

  $('.menu-button').click(function (event) {
    $('.modal-window').toggleClass('animate__fadeInRight');
  });

  $('.close-btn').click(function (event) {
    $('.modal-window').toggleClass('animate__bounceOutRight');
  });
});
