(() => {
    const refs = {
      openModalBtn: document.querySelector('[mob-data-mod-open]'),
      closeModalBtn: document.querySelector('[mob-data-mod-close]'),
      modal: document.querySelector('[mob-data-mod]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
    }
})();