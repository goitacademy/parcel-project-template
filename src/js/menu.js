(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-hmenu-open]'),
    closeModalBtn: document.querySelector('[data-hmenu-close]'),
    modal: document.querySelector('[data-hmenu]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-upped');
  }
})();