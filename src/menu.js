(() => {
  const menuBinRef = document.querySelector('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');

  menuBinRef.addEventListener('click', () => {
    const expanded =
      menuBinRef.getAttribute('aria-expanded') === 'true' || false;

    menuBinRef.classList.toggle('menu-button--is-open');
    menuBinRef.setAttribute('aria-expanded', !expanded);

    mobileMenuRef.classList.toggle('menu-container--is-open');
  });
})();
