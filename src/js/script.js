<<<<<<<< HEAD:src/js/script.js
(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

$(document).ready(function () {
  console.log('jQuery is ready!');
});
========
>>>>>>>> 0fcb10a0e62dbfae34a94ea2d363f0cc93d3b788:src/index.js
