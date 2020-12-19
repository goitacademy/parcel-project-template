(() => {
    const menuBtnRef = document.querySelector("[data-menu-open]");
    const mobileMenuRef = document.querySelector("[data-menu]");
  
  
    menuBtnRef.addEventListener("click", () => {
      const expanded =
        menuBtnRef.getAttribute("aria-expanded") === "true" || false;
  
      menuBtnRef.classList.toggle("is-open");
      menuBtnRef.setAttribute("aria-expanded", !expanded);
      
  
      mobileMenuRef.classList.toggle("is-open");
    });
  })();
  
  (() => {
    const menuBtnRef = document.querySelector("[data-menu-close]");
    const hamburger = document.querySelector("[data-menu-open]");

    const mobileMenuRef = document.querySelector("[data-menu]");
  
  
    menuBtnRef.addEventListener("click", () => {
      const expanded =
        menuBtnRef.getAttribute("aria-expanded") === "true" || false;
  
      menuBtnRef.classList.toggle("is-open");
      menuBtnRef.setAttribute("aria-expanded", !expanded);
      
      mobileMenuRef.classList.toggle("is-open");

      hamburger.classList.remove('is-open');
      hamburger.setAttribute("aria-expanded", false);
    });
  })();
  
  