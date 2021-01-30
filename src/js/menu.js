(() => {
    const menuBtnRef = document.querySelector("[data-menu-button]");
    const mobileMenuRef = document.querySelector("[data-menu]");
  
    menuBtnRef.addEventListener("click", () => {
      const expanded =
        menuBtnRef.getAttribute("aria-expanded") === "true" || false;
  
      menuBtnRef.classList.toggle("is-open");
      menuBtnRef.setAttribute("aria-expanded", !expanded);
  
      mobileMenuRef.classList.toggle("is-open");
    });
  })();

// Бургер меню

//   function menuСontainer(selector) {
//     let menu = $(selector);
//     let button = menu.find('.menu-button');
//     let links = menu.find('.menu-item-link');
//     let overlay = menu.find('.menu-container-overlay');
    
//     button.on('click', (e) => {
//         e.preventDefault();
//         toggleMenu();
//     });
    
//     links.on('click', () => toggleMenu());
//     overlay.on('click', () => toggleMenu());
    
//     function toggleMenu() {
//         menu.toggleClass('is-open');
//         if (menu.hasClass('is-open')) {
//             $('body').css('overflow', 'hidden');
//         } else {
//             $('body').css('overflow', 'visible');
//         }
//     }
// }

// menuСontainer ('.menu-container');

  // Скрипт кнопки Вверх

var btn = $('#top__button');

$(window).scroll(function () {
  if ($(window).scrollTop() > 500) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function (e) {
  e.preventDefault();
  $('html, body').animate({ scrollTop: 0 }, '300');
});