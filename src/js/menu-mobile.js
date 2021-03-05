(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-openMenu]'),
    closeModalBtn: document.querySelector('[data-modal-closeMenu]'),
    modal: document.querySelector('[data-modal-menu]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  // refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle("modal-open");
    refs.modal.classList.toggle('is-hidden');
    refs.openModalBtn.classList.toggle('is-active')
  }
})();