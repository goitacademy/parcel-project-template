(() => {
  const refs = {
    openModalBtn: document.querySelector('[subscribe-data-modal-open]'),
    closeModalBtn: document.querySelector('[subscribe-data-modal-close]'),
    modal: document.querySelector('[subscribe-data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('subscribe-is-hidden');
  }
})();
