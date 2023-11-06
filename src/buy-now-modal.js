(() => {
  const refs = {
    openModalBtn: document.querySelectorAll('[data-buy-now-modal-open]'),
    closeModalBtn: document.querySelectorAll('[data-buy-now-modal-close]'),
    modal: document.querySelector('[data-buy-now-modal]'),
  };

 refs.openModalBtn.forEach(btn => btn.addEventListener('click', toggleModal));
refs.closeModalBtn.forEach(btn => btn.addEventListener('click', toggleModal));


  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();