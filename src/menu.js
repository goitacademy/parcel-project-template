(() => {
  const refs = {
    openMenuBtn: document.querySelector("[data-menu-open]"),
    closeMenuBtn: document.querySelector("[data-menu-close]"),
    menu: document.querySelector("[data-menu]"),
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);
  document.addEventListener("click", checkOpenMenu);

  function checkOpenMenu(e) {
  if (refs.menu.classList.contains("is-open")) {
     if (e.target != refs.menu && e.target != refs.openMenuBtn) {
      toggleMenu();
    }
    }
  }
  function toggleMenu() {
    refs.menu.classList.toggle("is-open");
  }
})();



  
  
  
  
