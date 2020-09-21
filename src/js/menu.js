(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');
  const navLink = [...document.querySelectorAll('.site-nav-list-link')];

  navLink.forEach(e => {
    e.addEventListener('click', () => {
      const expanded =
        menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

      menuBtnRef.classList.toggle('is-open');
      menuBtnRef.setAttribute('aria-expanded', !expanded);

      mobileMenuRef.classList.toggle('is-open');
    });
  });
  menuBtnRef.addEventListener('click', () => {
    const expanded =
      menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);

    mobileMenuRef.classList.toggle('is-open');
  });
})();
