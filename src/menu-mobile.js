(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');
  const menuClose = document.querySelector('[data-menu-close]');
  menuBtnRef.addEventListener('click', () => {
    const expanded =
      menuBtnRef.getAttribute('aria-expanded') === 'true' || false;
    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);
    mobileMenuRef.classList.toggle('is-open');
  });
  menuClose.addEventListener('click', () => {
    mobileMenuRef.classList.toggle('is-open');
  });
  let elements = document.querySelectorAll('.menu-link');
  for (var i = 0; i < elements.length; i++) {
    elements[i].onclick = function () {
      mobileMenuRef.classList.toggle('is-open');
    };
  }
})();
