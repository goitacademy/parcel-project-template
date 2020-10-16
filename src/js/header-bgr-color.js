$(document).ready(function () {
  var scroll_pos = 0;
  $('header').scroll(function () {
    scroll_pos = $(this).scrollTop();
    if (scroll_pos > 390) {
      $('header').css('background-color', 'pink'),
        $('header').css('position', 'fixed');
    } else {
      $('header').css('background-color', 'aqua');
    }
    console.log(scroll_pos);
  });
});
