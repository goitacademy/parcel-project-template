(() => {
  const refs = {
    openModalBtn: document.querySelector('[thanks-modal-open]'),
    closeModalBtn: document.querySelector('[thanks-modal-close]'),
    modal: document.querySelector('[thanks-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
