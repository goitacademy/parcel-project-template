(() => {
    const menuBtnRef = document.querySelector("[data-menu-button]");
    const mobileMenuRef = document.querySelector("[data-menu]");
  const mobileBtnClose = document.querySelector("[data-menu-close]");
   const menuBuyBtnTab = document.querySelector(".menu__buy-btn-tab");
    menuBtnRef.addEventListener('click', function () {
  mobileMenuRef.classList.toggle('is-open');
      this.classList.toggle('is-hidden');
      menuBuyBtnTab.classList.toggle('is-hidden');
});
    mobileBtnClose.addEventListener('click', () => {
      mobileMenuRef.classList.toggle("is-open");
      menuBtnRef.classList.toggle('is-hidden');
      menuBuyBtnTab.classList.toggle('is-hidden');
    });
  })()