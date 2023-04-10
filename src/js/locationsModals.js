(() => {
  const refs = {
    openModalBtn: document.querySelector('.location-button[data-modal-open]'),
    closeModalBtn: document.querySelector('.location-button[data-modal-close]'),
    modal: document.querySelector('.modal-locations[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('location-is-hidden');
  }
})();
