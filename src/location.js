
(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open-location]"),
    closeModalBtn: document.querySelector("[data-modal-close-location]"),
    modal: document.querySelector("[data-modal-location]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();