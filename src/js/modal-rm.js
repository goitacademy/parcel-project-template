(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open3]'),
    closeModalBtn: document.querySelector('[data-modal-close3]'),
    modal: document.querySelector('[data-modal3]'),
  };
  // refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.openModalBtn.addEventListener('click', () => {
    refs.modal.classList.add('open-rm');
    refs.modal.classList.remove('close-rm');
  });
  refs.closeModalBtn.addEventListener('click', () => {
    refs.modal.classList.remove('open-rm');
    refs.modal.classList.add('close-rm');
  });
  function toggleModal() {
    refs.modal.classList.add('close-rm');
  }
})();

document.addEventListener('click', e => {
  let modal = document.querySelector('[data-modal3]');
  let menuBtnRef = document.querySelector('[data-modal-close3]');

  if (
    modal.classList.contains('open-rm') &&
    !e.target.closest('.rm__modal') &&
    !e.target.closest('[data-modal-open3]')
  ) {
    let event = new Event('click');
    menuBtnRef.dispatchEvent(event);
  }
});
