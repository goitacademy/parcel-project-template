
function burgerMenu(selector) {
    let menu = $(selector);
    let button = menu.find('.menu-button,.buy-now');
    let links = menu.find('.menu-link');
    let overlay = menu.find('.menu-overlay');
    button.on('click', (e) => {
        e.preventDefault();
        toggleMenu();
    });
    links.on('click', () => toggleMenu());
    overlay.on('click', () => toggleMenu());
    function toggleMenu() {
        menu.toggleClass('menu-active');
        if (menu.hasClass('menu-active')) {
            $('body').css('overflow', 'hidden');
        } else {
            $('body').css('overflow', 'visible');
        }
    }
}
burgerMenu ('.menu');