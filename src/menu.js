(() => {
const refs = {
    openMenuBtn: document.querySelector("[data-menu-open]"),
    closeMenuBtn: document.querySelector("[data-menu-close]"),
    mobileMenu: document.querySelector("[data-menu]"),
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);

	function toggleMenu() {
		refs.openMenuBtn.classList.toggle("is-hidden")
   	refs.mobileMenu.classList.toggle("is-open");
  }
})();