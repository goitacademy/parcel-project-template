 //  Header modal
(() => {
  const headerModal = {
    openModalBtn: document.querySelector("[data-modal-open-header]"),
    closeModalBtn: document.querySelector("[data-modal-close-header]"),
    modal: document.querySelector("[data-modal-header]"),
  };

  headerModal.openModalBtn.addEventListener("click", toggleModal);
  headerModal.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    headerModal.modal.classList.toggle("header-modal-is-hidden");
  }
})();