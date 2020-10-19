(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal2-open]'),
    closeModalBtn: document.querySelector('[data-modal2-close]'),
    modal: document.querySelector('[data-modal2]'),
  };
  // refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.openModalBtn.addEventListener('click', () => {
    refs.modal.classList.add('is-openiv');
    refs.modal.classList.remove('is-hiddeniv');
  });
  refs.closeModalBtn.addEventListener('click', () => {
    refs.modal.classList.remove('is-openiv');
    refs.modal.classList.add('is-hiddeniv');
  });
  function toggleModal() {
    refs.modal.classList.add('is-hiddeniv');
  }
})();

document.addEventListener('click', e => {
  let modal = document.querySelector('[data-modal2]');
  let menuBtnRef = document.querySelector('[data-modal2-close]');

  if (
    modal.classList.contains('is-openiv') &&
    !e.target.closest('.franchise__modal') &&
    !e.target.closest('[data-modal2-open]')
  ) {
    let event = new Event('click');
    menuBtnRef.dispatchEvent(event);
  }
});
