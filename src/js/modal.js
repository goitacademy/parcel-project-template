(() => {
  const bodyStopScroll = document.querySelector('[data-body]');
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    closeModalBtn1: document.querySelector('[data-modal-close1]'),
    closeModalBtn2: document.querySelector('[data-modal-close2]'),
    closeModalBtn3: document.querySelector('[data-modal-close3]'),
    closeModalBtn4: document.querySelector('[data-modal-close4]'),
    closeModalBtn5: document.querySelector('[data-modal-close5]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn1.addEventListener('click', toggleModal);
  refs.closeModalBtn2.addEventListener('click', toggleModal);
  refs.closeModalBtn3.addEventListener('click', toggleModal);
  refs.closeModalBtn4.addEventListener('click', toggleModal);
  refs.closeModalBtn5.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-open');
    bodyStopScroll.classList.toggle('stop-scroll');
  }
})();
