(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');

  menuBtnRef.addEventListener('click', () => {
    const expanded =
      menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);

    mobileMenuRef.classList.toggle('is-open');
  });
})();

let menuBtnRef = document.querySelector('[data-menu-button]');

document.addEventListener('click', e => {
  let menu = document.querySelector('[data-menu]');

  if (
    menu.classList.contains('is-open') &&
    !e.target.closest('[data-menu]') &&
    !e.target.closest('.header-page__menu-button')
  ) {
    let event = new Event('click');
    menuBtnRef.dispatchEvent(event);
  }
});

document.querySelectorAll('.site-nav__item').forEach(elem => {
  let event = new Event('click');

  elem.addEventListener('click', e => {
    menuBtnRef.dispatchEvent(event);
  });
});
