(() => {
  const menuBtnOpen = document.querySelector('[menu-button-open]');
  const menuBtnClose = document.querySelector('[menu-button-close]');
  const mobileMenuRef = document.querySelector('[data-menu]');

  menuBtnOpen.addEventListener('click', () => {
    const expanded =
      menuBtnOpen.getAttribute('aria-expanded') === 'true' || false;
    const expanded2 =
      menuBtnClose.getAttribute('aria-expanded') === 'false' || true;

    menuBtnClose.classList.toggle('is-open');
    menuBtnOpen.classList.toggle('is-open');

    mobileMenuRef.classList.toggle('is-open');
  });

  menuBtnClose.addEventListener('click', () => {
    const expanded =
      menuBtnOpen.getAttribute('aria-expanded') === 'true' || false;
    const expanded2 =
      menuBtnClose.getAttribute('aria-expanded') === 'false' || true;

    menuBtnClose.classList.toggle('is-open');
    menuBtnOpen.classList.toggle('is-open');

    mobileMenuRef.classList.toggle('is-open');
  });
})();
