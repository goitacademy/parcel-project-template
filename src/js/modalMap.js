(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-map-open]'),
      closeModalBtn: document.querySelector('[data-map-close]'),
      modal: document.querySelector('[data-map]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
    }
  })();