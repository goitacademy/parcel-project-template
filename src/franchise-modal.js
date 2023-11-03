(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-fr-modal-open]'),
    closeModalBtn: document.querySelector('[data-fr-modal-close]'),
    modal: document.querySelector('[data-fr-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
