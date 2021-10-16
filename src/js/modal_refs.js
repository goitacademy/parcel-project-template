import renderModalClass from './render-modal-class.js';
import developersModalTemplate from '../templates/developers-team-modal.hbs';

export default function (body) {
  function onOpenModal() {
    let modalTemplate = developersModalTemplate();

    const modal = new renderModalClass(modalTemplate);
    modal.showModal();

    body.classList.add('developers-open');

    window.addEventListener('keydown', onEscKeyPress);
    window.addEventListener('click', onCloseModalClick);

    function onCloseModalClick(e) {
      if (
        e.target.classList.contains('developers__button') ||
        e.target.classList.contains('basicLightbox')
      ) {
        modal.closeModal();
        removeModalOpenAndEventListeners();
      }
    }

    function onEscKeyPress(e) {
      if (e.code === 'Escape') {
        modal.closeModal();
        removeModalOpenAndEventListeners();
      }
    }

    function removeModalOpenAndEventListeners() {
      body.classList.remove('developers-open');
      window.removeEventListener('click', onCloseModalClick);
      window.removeEventListener('keydown', onEscKeyPress);
    }
  }

  return {
    onOpenModal,
  };
}
