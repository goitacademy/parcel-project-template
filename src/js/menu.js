(() => {
  const refs = {
    menuBtn: document.querySelector('[data-menu-button]'),
    mobileMenu: document.querySelector('[data-menu]'),
    sideBar: document.querySelector('[data-sideBar]'),
  };

  refs.menuBtn.addEventListener('click', () => {
    const expanded =
      refs.menuBtn.getAttribute('aria-expanded') === 'true' || false;

    refs.menuBtn.classList.toggle('is-open');
    refs.menuBtn.setAttribute('aria-expanded', !expanded);

    refs.mobileMenu.classList.toggle('is-visible');
    refs.sideBar.classList.toggle('is-open');
    document.body.classList.toggle('modal-open');
  });
})();

// (() => {
//   const refs = {
//     openModalBtn: document.querySelector('[data-modal-open]'),
//     closeModalBtn: document.querySelector('[data-modal-close]'),
//     modal: document.querySelector('[data-modal]'),
//   };

//   refs.openModalBtn.addEventListener('click', toggleModal);
//   refs.closeModalBtn.addEventListener('click', toggleModal);

//   function toggleModal() {
//     document.body.classList.toggle("modal-open");
//     refs.modal.classList.toggle('is-hidden');
//   }
// })();
