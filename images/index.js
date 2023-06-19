const openButton = document.querySelector('[data-modal-open]');
const closeButton = document.querySelector('[data-modal-close]');
const modal = document.querySelector('[data-modal]');

openButton.addEventListener('click', () => {
  modal.showModal();
});

closeButton.addEventListener('click', () => {
  modal.close();
});
