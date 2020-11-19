var btn = $('.btn-menu');

btn.on('click', function() {
  $(this).toggleClass('active');
  $(this).toggleClass('not-active');
});