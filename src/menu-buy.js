(() => {
  const refs = {
    openModalBtn: document.querySelector('[menubuy-modal-open]'),
    closeModalBtn: document.querySelector('[menubuy-modal-close]'),
    modal: document.querySelector('[menubuy-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();