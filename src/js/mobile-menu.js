(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");
  const mobileBtnClose = document.querySelector("[data-menu-close]");
  menuBtnRef.addEventListener("click", () => {
    mobileMenuRef.classList.toggle("is-open");
  });
  menuBtnRef.addEventListener("click", toggleMenu);
  function toggleMenu() {
    document.body.classList.toggle("menu-open");
  }
  mobileBtnClose.addEventListener("click", () => {
    mobileMenuRef.classList.toggle("is-open");
    document.body.classList.toggle("menu-open");
  });
})();