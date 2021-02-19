(() => {
    const refs = {
      openModalBtn: document.querySelector('[cream-modal-open]'),
      closeModalBtn: document.querySelector('[cream-modal-close]'),
      modal: document.querySelector('[cream-modal]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('hidden');
    }
  })();