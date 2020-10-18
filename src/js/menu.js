(() => {
  const menuBtnOpenRef = document.querySelector('[data-menu-button]');
  const menuBtnCloseRef = document.querySelector('[data-menu-button-close]');
  const mobileMenuRef = document.querySelector('[data-menu]');

  const toggleMenu = e => {
    const { target: btn } = e;
    const expanded = btn.getAttribute('aria-expanded') === 'true' || false;

    btn.classList.toggle('is-open');
    btn.setAttribute('aria-expanded', !expanded);

    mobileMenuRef.classList.toggle('is-open');
  };

  menuBtnOpenRef.addEventListener('click', toggleMenu);
  menuBtnCloseRef.addEventListener('click', toggleMenu);
})();
