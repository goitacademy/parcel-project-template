import refs from './refs';

refs.openTeamModalBtn.addEventListener('click', onOpenModal);
refs.closeTeamModalBtn.addEventListener('click', onCloseModal);
refs.backdropTeamModal.addEventListener('click', onBackdropClick);

function onOpenModal(evt) {
  evt.preventDefault();

  window.addEventListener('keydown', onEscKeyPress);
  refs.body.classList.add('popup-open');
  refs.body.classList.add('show-modal');
}

function onCloseModal() {
  window.removeEventListener('keydown', onEscKeyPress);
  document.body.classList.remove('show-modal');
  document.body.classList.remove('popup-open');

  //refs.closeTeamModalBtn.removeEventListener('click', onCloseModal);
  //refs.backdropTeamModal.removeEventListener('click', onBackdropClick);
}

function onBackdropClick(event) {
  console.log(event, event.currentTarget, event.target);
  if (event.currentTarget === event.target) {
    onCloseModal();
  }
}

function onEscKeyPress(event) {
  if (event.code === 'Escape') {
    onCloseModal();
  }
}
