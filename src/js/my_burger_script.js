(() => {
  const refs = {
    openMenuBtn: document.querySelector("[burger-menu-open]"),
    closeMenuBtn: document.querySelector("[burger-menu-close]"),
    modal: document.querySelector("[burger-menu]"),
  };

  refs.openMenuBtn.addEventListener("click", toggleModal);
  refs.closeMenuBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden--menu");
  }
})();
