(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');

  menuBtnRef.addEventListener('click', () => {
    const expanded =
      menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);

    mobileMenuRef.classList.toggle('is-open');

    $('close').css('position', 'absolute'),
      $('close').css('top', '25px'),
      $('close').css('right', '25px');
  });
})();

// $(document).ready(function () {
//   var scroll_pos = 0;
//   $('header').scroll(function () {
//     scroll_pos = $(this).scrollTop();
//     if (scroll_pos > 390) {
//       $('close').css('position', 'absolute'),
//         $('close').css('top', '25px'),
//         $('close').css('right', '25px');
//     } else {
//       $('header').css('background-color', 'aqua');
//     }
//     console.log(scroll_pos);
//   });
// });
