(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');
  const mobileMenuRef2 = document.querySelector('[logo]');
  const body = document.querySelector('body');
  const html = document.querySelector('html');

  const toggleScroll = element => {
    element.classList.toggle('no-scroll');
  };

  menuBtnRef.addEventListener('click', () => {
    const expanded = menuBtnRef.getAttribute('aria-expanded') === 'true';

    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);

    mobileMenuRef.classList.toggle('is-open');
    mobileMenuRef2.classList.toggle('logo-hidden');

    toggleScroll(html);
    toggleScroll(body);
  });
})();
