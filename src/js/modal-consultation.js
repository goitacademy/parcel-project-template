(() => {
  const refs = {
	openModalBtn: document.querySelector('[data-modal-open-tell]'),
    closeModalBtn: document.querySelector('[data-modal-close-tell]'),
    modal: document.querySelector('[data-modal]'),
	};
  
  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle("modal-consultation");
    refs.modal.classList.toggle('is-hidden');
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    modal: document.querySelector('[data-modal]'),
  };
  
  refs.openModalBtn.addEventListener('click', toggleModal);
  
  function toggleModal() {
    document.body.classList.toggle("modal-consultation");
    refs.modal.classList.toggle('is-hidden');
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-mobile]'),
    modal: document.querySelector('[data-modal]'),
  };
  
  refs.openModalBtn.addEventListener('click', toggleModal);
 
  function toggleModal() {
    document.body.classList.toggle("modal-consultation");
    refs.modal.classList.toggle('is-hidden');
  }
})();