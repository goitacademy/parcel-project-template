(() => {
    
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
    }
    const menuBtnRef = document.querySelector("[data-menu-button]");
    const mobileMenuRef = document.querySelector("[data-menu]");

      menuBtnRef.addEventListener("click", () => {
      menuBtnRef.classList.toggle("is-open");
      mobileMenuRef.classList.toggle("is-open");});
      
    })();