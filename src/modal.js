(() => {
  const refs = {
    openModalBtn1: document.querySelector('[data-modal-open="modal1"]'),
    openModalBtn2: document.querySelector('[data-modal-open="modal2"]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn1.addEventListener('click', toggleModal);
  refs.openModalBtn2.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('modal--hidden');
  }
})();
