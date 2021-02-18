(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-franchise-open]'),
      closeModalBtn: document.querySelector('[data-franchise-close]'),
      modal: document.querySelector('[data-franchise]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      document.body.classList.toggle("franchise-open");
      refs.modal.classList.toggle('is-hidden');
    }
  })();