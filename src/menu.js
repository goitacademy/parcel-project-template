(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-menu-open]'),
    closeModalBtn: document.querySelector('[data-menu-close]'),
    modal: document.querySelector('[data-menu]'),
    menuNav: document.querySelector('.menu-navigation'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.menuNav.addEventListener('click', e => {
    if (e.target.value !== e.currentTarget.value) {
      return;
    }
    refs.modal.classList.remove('is-open');
  });

  function toggleModal() {
    document.body.classList.toggle('menu-open');
    refs.modal.classList.toggle('is-open');
  }
})();
