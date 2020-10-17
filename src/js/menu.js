(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const menuBtnCl = document.querySelector('[data-menu-button-close]');
  const mobileMenuRef = document.querySelector('[data-menu]');

  menuBtnRef.addEventListener('click', () => {
    const expanded =
      menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);

    mobileMenuRef.classList.toggle('is-open');
  });

  menuBtnCl.addEventListener('click', () => {
    const expanded =
      menuBtnCl.getAttribute('aria-expanded') === 'false' || true;

    menuBtnCl.setAttribute('aria-expanded', !expanded);

    mobileMenuRef.classList.toggle('is-open');
  });
})();
