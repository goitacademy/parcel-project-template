(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-pic1]'),
    closeModalBtn: document.querySelector('[data-modal-close-pic1]'),
    modal: document.querySelector('[data-modal-pic1]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-pic2]'),
    closeModalBtn: document.querySelector('[data-modal-close-pic2]'),
    modal: document.querySelector('[data-modal-pic2]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-pic3]'),
    closeModalBtn: document.querySelector('[data-modal-close-pic3]'),
    modal: document.querySelector('[data-modal-pic3]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
