(() => {
  const refs = {
    openModalBtn: document.querySelector("[contacts-modal-open]"),
    closeModalBtn: document.querySelector("[contacts-modal-close]"),
    modal: document.querySelector("[contacts-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("contacts-modal__wrapper--is-hidden");
  }
})();
