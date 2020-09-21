(() => {
  const modal = document.querySelector('[data-modal]');
  const toggleModal = () => {
    modal.classList.toggle('is-hidden');
  };

  document.querySelectorAll('[data-modal-open]').forEach(element => {
    element.addEventListener('click', toggleModal);
  });

  document.querySelectorAll('[data-modal-close]').forEach(element => {
    element.addEventListener('click', toggleModal);
  });
})();
