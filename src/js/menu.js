(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');
  const mobileIconRef = document.querySelector('[icon-menu]');

  menuBtnRef.addEventListener('click', () => {
    const expanded =
      menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    menuBtnRef.classList.toggle('is-open');
    mobileIconRef.classList.add('icon-size');
    menuBtnRef.setAttribute('aria-expanded', !expanded);

    mobileMenuRef.classList.toggle('is-open');
    if (menuBtnRef.getAttribute('aria-expanded') === 'false') {
      mobileIconRef.classList.remove('icon-size');
    }
  });
})();
