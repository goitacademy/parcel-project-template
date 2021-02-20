  
(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-header-modal-open]'),
    closeModalBtn: document.querySelector('[data-header-modal-close]'),
    modal: document.querySelector('[data-header-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-header-in-modal-open]'),
    // closeModalBtn: document.querySelector('[data-header-modal-close]'),
    modal: document.querySelector('[data-header-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

