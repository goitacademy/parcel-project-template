(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-buy-now-modal-open]'),
    closeModalBtn: document.querySelector('[data-buy-now-modal-close]'),
    modal: document.querySelector('[data-buy-now-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
