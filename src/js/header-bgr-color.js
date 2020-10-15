$(document).ready(function () {
  var scroll_pos = 0;
  $('header1').scroll(function () {
    scroll_pos = $(this).scrollTop();
    if (scroll_pos > 390) {
      $('header1').css('background-color', 'pink'),
        $('header1').css('position', 'fixed');
    } else {
      $('header1').css('background-color', 'aqua');
    }
    console.log(scroll_pos);
  });
});
