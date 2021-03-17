(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-hero-modal-open]'),
      closeModalBtn: document.querySelector('[data-hero-modal-close]'),
      modal: document.querySelector('[data-hero-modal]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      document.body.classList.toggle("hero-modal-open");
      refs.modal.classList.toggle('is-hidden');
    }
  })();
  