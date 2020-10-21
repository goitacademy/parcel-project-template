(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-open-modal]'),
    openModalBtn2: document.querySelector('[data-open-modal-2]'),
    closeModalBtn: document.querySelector('[data-close-modal]'),
    backdrop: document.querySelector('[data-backdrop]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.openModalBtn2.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  refs.backdrop.addEventListener('click', logBackdropClick);

  function toggleModal() {
    refs.backdrop.classList.toggle('is-hidden');
  }

  function logBackdropClick() {
    console.log('Это клик в бекдроп');
  }
})();
