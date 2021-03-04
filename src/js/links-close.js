const links = document.querySelectorAll('[data-modal-link]');

const MODAL_HIDDEN_CLASS = 'is-hidden';
const BODY_SCROLL_DISABLE_CLASS = 'modal-open';
const BURGER_VISIBLE = 'is-active';

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
