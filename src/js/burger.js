(() => {
  const openBtnRef = document.querySelector('[data-button-open]');
  const closeBtnRef = document.querySelector('[data-button-close]');
  const mobileMenuRef = document.querySelector('[data-menu]');
  const headerButton = document.querySelector('.header__outside');

  openBtnRef.addEventListener('click', () => {
    //const expanded =
    //openBtnRef.getAttribute('aria-expanded') === 'true' || false;
    //openBtnRef.classList.toggle('is-open');
    openBtnRef.style.visibility = 'hidden';
    headerButton.style.visibility = 'hidden';
    //openBtnRef.setAttribute('aria-expanded', !expanded);
    mobileMenuRef.classList.toggle('is-open');
  });

  closeBtnRef.addEventListener('click', () => {
    //const expanded =
    //closeBtnRef.getAttribute('aria-expanded') === 'true' || false;
    //closeBtnRef.classList.toggle('is-open');
    openBtnRef.style.visibility = 'initial';
    headerButton.style.visibility = 'initial';
    //closeBtnRef.setAttribute('aria-expanded', !expanded);
    mobileMenuRef.classList.toggle('is-open');
  });
})();
