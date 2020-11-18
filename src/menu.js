(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    header: document.querySelector('header'),
  };
  refs.header.addEventListener('click', toggleModal);
  function toggleModal(e) {
    if (
      e.target.closest('button') === refs.openModalBtn ||
      e.target.closest('button') === refs.closeModalBtn ||
      e.target.href
    ) {
      refs.modal.classList.toggle('is-hidden');
    }
  }
})();
