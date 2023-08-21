// Mobile menu
(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');
  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');
    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };
  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();
// Contacts btn
(() => {
  const contactRefs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };
  contactRefs.openModalBtn.addEventListener('click', toggleModal);
  contactRefs.closeModalBtn.addEventListener('click', toggleModal);
  function toggleModal() {
    contactRefs.modal.classList.toggle('is-hidden');
  }
})();
(() => {
  const contactRefs = {
    openModalBtn: document.querySelector('[data-modal-open-our]'),
    closeModalBtn: document.querySelector('[data-modal-close-our]'),
    modal: document.querySelector('[data-modal-our]'),
  };
  contactRefs.openModalBtn.addEventListener('click', toggleModal);
  contactRefs.closeModalBtn.addEventListener('click', toggleModal);
  function toggleModal() {
    contactRefs.modal.classList.toggle('is-hidden');
  }
})();
// Buy now button
(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    modalContent: document.querySelector('.modal-content'),
  };
  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

