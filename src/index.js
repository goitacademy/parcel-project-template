(() => {
  const n = {
    openModalBtn: document.querySelector('[data-main-open]'),
    closeModalBtn: document.querySelector('[data-main-close]'),
    modal: document.querySelector('[data-main]'),
  };
  n.openModalBtn.addEventListener('click', o),
    n.closeModalBtn.addEventListener('click', o);
  function o() {
    n.modal.classList.toggle('is-hidden');
  }
})();
