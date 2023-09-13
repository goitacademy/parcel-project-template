(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    modal: document.querySelector('[data-modal]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
