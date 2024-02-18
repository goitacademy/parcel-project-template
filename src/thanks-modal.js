(() => {
  const refs = {
    openModalBtn: document.querySelector('[thanks-modal-open]'),
    closeModalBtn: document.querySelector('[thanks-modal-close]'),
    modal: document.querySelector('[thanks-modal]'),
  };

  refs.openModalBtn.addEventListener('click', openModal);
  refs.closeModalBtn.addEventListener('click', closeModal);

  function openModal() {
    refs.modal.style.visibility = 'visible';
  }

  function closeModal() {
    refs.modal.style.visibility = 'hidden';
  }
})();
