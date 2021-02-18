(() => {
  const menuBtnRef = document.querySelector("[data-menu-button-in]");
  const mobileMenuRef = document.querySelector("[data-menu]");

  menuBtnRef.addEventListener("click", () => {
  //   const expanded =
  //     menuBtnRef.getAttribute("aria-expanded") === "true" || false;

    menuBtnRef.classList.toggle("header__menu-in--is-hidden");
    // menuBtnRef.setAttribute("aria-expanded", !expanded);

    mobileMenuRef.classList.toggle("header__menu-container--is-hidden");
  });
})();