(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    overflow: document.querySelector('[data-overflow]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.overflow.classList.toggle('modal-open');
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal2-open]'),
    closeModalBtn: document.querySelector('[data-modal2-close]'),
    overflow: document.querySelector('[data-overflow]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.overflow.classList.toggle('modal-open');
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open3]'),
    closeModalBtn: document.querySelector('[data-modal-close3]'),
    overflow: document.querySelector('[data-overflow]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.overflow.classList.toggle('modal-open');
  }
})();

// Скрипт что бы при открытии меню не двигалось боди

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-menu-open]'),
    closeModalBtn: document.querySelector('[data-menu-close]'),
    overflow: document.querySelector('[data-overflow]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.overflow.classList.toggle('modal-open');
  }
})();
