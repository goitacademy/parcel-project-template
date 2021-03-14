(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-wrap-open]'),
    closeModalBtn: document.querySelector('[data-wrap-close]'),
    modal: document.querySelector('[data-wrap]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();