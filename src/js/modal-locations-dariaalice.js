(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-loc]'),
    closeModalBtn: document.querySelector('[data-modal-close-loc]'),
    modal: document.querySelector('[data-modal-loc]'),
  };
  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    if (!refs.modal.classList.contains('is-hidden')) {
      initMap();
    }
  }
})();
