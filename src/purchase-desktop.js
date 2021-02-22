(() => {
  const refs = {
    openModalBtn: document.querySelector("[desk-modal-open]"),
    closeModalBtn: document.querySelector("[desk-modal-close]"),
    backdrop: document.querySelector("[desk-backdrop]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.backdrop.classList.toggle("is-hidden");
  }
})();