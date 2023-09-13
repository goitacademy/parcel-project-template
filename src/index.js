const openButtons = document.querySelectorAll('[data-open-modal]');
const closeButtons = document.querySelectorAll('[data-close-modal]');
const modals = document.querySelectorAll('[data-modal]');

openButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    modals[index].showModal();
  });
});
closeButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    modals[index].close();
  });
});
