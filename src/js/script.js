function backToTop() {
  let button = $('.back-to-top');

  $(window).on('scroll', () => {
    if ($(this).scrollTop() >= 150) {
      button.fadeIn();
    } else {
      button.fadeOut();
    }
  });

  button.on('click', e => {
    // e.preventDefault();
    $('html'), animate({ scrollTop: 0 }, 1000);
  });
}

backToTop();
