(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open3]'),
    closeModalBtn: document.querySelector('[data-modal-close3]'),
    modal: document.querySelector('[data-modal3]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('close-rm');
  }
})();
