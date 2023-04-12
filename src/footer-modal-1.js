(() => {
  const refs = {
    openModalBtn: document.querySelector('[footer-data-modal-open-1]'),
    closeModalBtn: document.querySelector('[footer-data-modal-close-1]'),
    modal: document.querySelector('[footer-data-modal-1]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('footer-is-hidden');
  }
})();
