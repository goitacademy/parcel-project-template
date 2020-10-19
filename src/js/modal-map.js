(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };
  // refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.openModalBtn.addEventListener('click', () => {
    refs.modal.classList.add('is-open');
    refs.modal.classList.remove('is-hidden');
  });
  refs.closeModalBtn.addEventListener('click', () => {
    refs.modal.classList.remove('is-open');
    refs.modal.classList.add('is-hidden');
  });
  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

document.addEventListener('click', e => {
  let modal = document.querySelector('[data-modal]');
  let menuBtnRef = document.querySelector('[data-modal-close]');

  if (
    modal.classList.contains('is-open') &&
    !e.target.closest('.modal') &&
    !e.target.closest('[data-modal-open]')
  ) {
    let event = new Event('click');
    menuBtnRef.dispatchEvent(event);
  }
});
