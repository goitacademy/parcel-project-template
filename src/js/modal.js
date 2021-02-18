(() => {
  const refs = {
    openModalBtn: document.querySelectorAll('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.closeModalBtn.addEventListener('click', toggleModal);  
  
  refs.openModalBtn.forEach(function (openModalBtn) {
    openModalBtn.addEventListener('click', toggleModal)
  })

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();