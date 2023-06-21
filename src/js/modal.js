(() => {

  function initModal(id) {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-open='" + id + "']"),
      closeModalBtn: document.querySelector("[data-modal-close='" + id + "']"),
      modal: document.querySelector("[data-modal='" + id + "']"),
    };

    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);

    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
    }
  }
  initModal(1);
  initModal(2);
  initModal(3);
})();

    function initModal(id) {
      const refs = {
        openModalBtn: document.querySelector("[data-modal-open='" + id + "']"),
        closeModalBtn: document.querySelector("[data-modal-close='" + id + "']"),
        modal: document.querySelector("[data-modal='" + id + "']"),
      };
  
      refs.openModalBtn.addEventListener("click", toggleModal);
      refs.closeModalBtn.addEventListener("click", toggleModal);
  
      function toggleModal() {
        refs.modal.classList.toggle("is-hidden");
      }
    }
    initModal(1)
    initModal(2)
    initModal(3)
  })();
