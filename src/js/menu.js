(() => {
  const 
    menuBtnRef = document.querySelector("[data-menu-button]");
  mobileMenuRef = document.querySelector("[data-menu]");
  menuBtnRef.addEventListener('click', () => {
    menuBtnRef.classList.toggle('is-open');
    mobileMenuRef.classList.toggle('is-open');
  });
  })();