        
(() => {
  const refs = {
    openModalBtn: document.querySelector('[buynow-data-modal-open]'),
    openModalBtn2: document.querySelector('[buynow-data-modal-open-2]'),
    closeModalBtn: document.querySelector('[buynow-data-modal-close]'),
    modal: document.querySelector('[buynow-data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.openModalBtn2.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();