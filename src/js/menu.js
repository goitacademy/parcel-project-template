(() => {
    const menuBtnRef = document.querySelector("[data-menu-button]");
    const mobileMenuRef = document.querySelector("[data-menu]");
    const backdrop = document.querySelector("[data-backdrop]");
      
    menuBtnRef.addEventListener("click", () => {
      const expanded =
        menuBtnRef.getAttribute("aria-expanded") === "true" || false;
  
      menuBtnRef.classList.toggle("is-open");
      menuBtnRef.setAttribute("aria-expanded", !expanded);
  
      mobileMenuRef.classList.toggle("is-open");
      backdrop.classList.toggle("is-hidden");      
      });

      backdrop.addEventListener("click", () => {
        const expanded =
        backdrop.classList.toggle("is-hidden");
        menuBtnRef.classList.toggle("is-open");
        mobileMenuRef.classList.toggle("is-open");
      });
      mobileMenuRef.addEventListener("click", () => {
        const expanded =
        backdrop.classList.toggle("is-hidden");
        menuBtnRef.classList.toggle("is-open");
        mobileMenuRef.classList.toggle("is-open");
      });
  })();