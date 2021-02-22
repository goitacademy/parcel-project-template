(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-open-backdrop]'),
      closeModalBtn: document.querySelector('[data-close-backdrop]'),
      modal: document.querySelector('[data-backdrop]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden-backdrop');
    }
  })();