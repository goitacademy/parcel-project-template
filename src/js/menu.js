(() => {
  const refs = {
    openMenuBtn: document.querySelector("[data-menu-open]"),
    closeMenuBtn: document.querySelector("[data-menu-close]"),
    menu: document.querySelector("[data-menu]"),
    navMenuLink: [...document.querySelectorAll('.mobile-menu-nav-link')],
  };

  refs.openMenuBtn.addEventListener("click", toggleModal);
  refs.closeMenuBtn.addEventListener("click", toggleModal);
  refs.navMenuLink.forEach(e => {
    e.addEventListener("click", toggleModal);
  })
    
  function toggleModal() {
    refs.menu.classList.toggle("is-open");
  }
})();