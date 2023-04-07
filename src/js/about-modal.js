(() => {
    const refs = {
      openModalBtn: document.querySelector(".about-modal-button[data-modal-open]"),
      closeModalBtn: document.querySelector(".about-modal-button[data-modal-close]"),
      modal: document.querySelector(".about-modal[data-modal]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("about-modal-is-hidden");
    }
  })();