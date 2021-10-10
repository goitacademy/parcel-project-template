const team = document.querySelector('#team');
const developers = document.querySelector('.developers');
const btnCloseModal = document.querySelector('[data-action="close-developers"]');

team.addEventListener('click', onOpenModalFooter);
btnCloseModal.addEventListener('click', onCloseModalClick);

function onOpenModalFooter() {
  developers.classList.add('is-open');
  window.addEventListener('keydown', onEscKeyPress);
}

function onCloseModalClick(e) {
  developers.classList.remove('is-open');
}

function onEscKeyPress(e) {
  if (e.code === 'Escape') {
    onCloseModalClick();
  }
}
