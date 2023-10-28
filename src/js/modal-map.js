(() => {
  const refs = {
    openModalBtn: document.querySelector('[location-data-modal-open]'),
    closeModalBtn: document.querySelector('[location-data-modal-close]'),
    modal: document.querySelector('[location-data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();