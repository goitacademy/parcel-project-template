(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-leave-review-open]'),
    closeModalBtn: document.querySelector('[data-leave-review-close]'),
    modal: document.querySelector('[data-leave-review-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
