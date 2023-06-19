(() => {
  const refs = {
    openModalBtn: document.querySelectorAll('[data-modal-open]'),
    closeModalBtn: document.querySelectorAll('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.forEach(btn => btn.addEventListener('click', toggleModal));
  refs.closeModalBtn.forEach(btn => btn.addEventListener('click', toggleModal));

  function toggleModal(e) {
    const modal = e.currentTarget.nextElementSibling
    modal.classList.toggle('is-hidden');

  }
})();