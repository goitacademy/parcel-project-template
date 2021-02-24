/*const btnMenu = document.querySelector('.menu__button');
const menu = document.querySelector('.menu__container');
const toggleMenu = function() {
    menu.classList.toggle('is-open');
}

btnMenu.addEventListener('click', function(e) {
    e.stopPropagation();
    toggleMenu();
});

document.addEventListener('click', function(e) {
    const target = e.target;
    const its_menu = target == menu || menu.contains(target);
    const its_btnMenu = target == btnMenu;
    const menu_is_active = menu.classList.contains('is-open');
    
    if (!its_menu && !its_btnMenu && menu_is_active) {
        toggleMenu();
    }
});