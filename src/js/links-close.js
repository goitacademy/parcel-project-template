const links = document.querySelectorAll('[data-modal-link]');

const modalsWrappers = document.querySelectorAll('.modal-area-bgd');
const modalContainers = document.querySelectorAll('.modal-area-content');

const MODAL_HIDDEN_CLASS = 'is-hidden';
const BODY_SCROLL_DISABLE_CLASS = 'modal-open';
const BURGER_VISIBLE = 'is-active';

enableCloseModalOnBgdClick();

links.forEach(link => {
  link.addEventListener('click', hideModal);
});

function hideModal() {
  const modalToClose = document.querySelector('.backdrop-mobile');
  const burger = document.querySelector('.hamburger');

  modalToClose.classList.add(MODAL_HIDDEN_CLASS);
  burger.classList.remove(BURGER_VISIBLE);
  document.body.classList.remove(BODY_SCROLL_DISABLE_CLASS);
}

function enableCloseModalOnBgdClick() {
  if (modalContainers.length) {
    modalContainers.forEach(container => {
      container.addEventListener('click', event => event.stopPropagation());
    });
  }

  if (modalsWrappers.length) {
    modalsWrappers.forEach(container => {
      container.addEventListener('click', hideModal);
    });
  }
}
