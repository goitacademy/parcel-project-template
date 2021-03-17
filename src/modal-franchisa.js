(() => {
  const refs = {
    openModalBtn: document.querySelector('[franchisa-modal-open]'),
    closeModalBtn: document.querySelector('[franchisa-modal-close]'),
    modal: document.querySelector('[franchisa-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();