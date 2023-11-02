(() => {
  const refs = {
    openModalBtn: document.querySelector('[readmore-data-modal-open]'),
    closeModalBtn: document.querySelector('[readmore-data-modal-close]'),
    modal: document.querySelector('[readmore-data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();