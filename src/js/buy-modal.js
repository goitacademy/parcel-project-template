(() => {
  const refs = {
    openModalBtn: document.querySelector(".buy-modal-button[data-modal-open]"),
    openModalBtnMenu: document.querySelector(".buy-modal-button-menu[data-modal-open]"),
    closeModalBtn: document.querySelector(".buy-modal-button[data-modal-close]"),
    modal: document.querySelector(".buy-modal[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.openModalBtnMenu.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("buy-modal-is-hidden");
  }
})();