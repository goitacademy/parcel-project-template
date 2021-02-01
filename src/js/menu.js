// Бургер меню

function burgerMenu(selector) {
    let menu = $(selector);
    let button = menu.find('.menu__button,.buy-now');
    let links = menu.find('.menu__link');
    let overlay = menu.find('.menu__overlay');
    
    button.on('click', (e) => {
        e.preventDefault();
        toggleMenu();
    });
    
    links.on('click', () => toggleMenu());
    overlay.on('click', () => toggleMenu());
    
    function toggleMenu() {
        menu.toggleClass('menu_active');
        if (menu.hasClass('menu_active')) {
            $('body').css('overflow', 'hidden');
        } else {
            $('body').css('overflow', 'visible');
        }
    }
}

burgerMenu ('.menu');


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