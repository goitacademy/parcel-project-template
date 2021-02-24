(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-desk-modal-open]"),
    closeModalBtn: document.querySelector("[data-desk-modal-close]"),
    backdrop: document.querySelector("[data-desk-backdrop]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.backdrop.classList.toggle("is-hidden");
  }
})();