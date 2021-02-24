(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };
  // const refs2 = {
  //   openModalBtn: document.querySelector('[data-modal-open2]'),
  //   closeModalBtn: document.querySelector('[data-modal-close]'),
  //   modal: document.querySelector('[data-modal]'),
  // };

  refs.openModalBtn.addEventListener('click', toggleModal);
  // refs2.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
