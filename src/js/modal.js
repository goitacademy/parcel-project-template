(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),    
    closeModalBtn: document.querySelector("[data-modal-close]"),
    openModalBtn2: document.querySelector("[data-modal-open2]"),
    closeModalBtn2: document.querySelector("[data-modal-close2]"),
    openModalBtn3: document.querySelector("[data-modal-open3]"),
    closeModalBtn3: document.querySelector("[data-modal-close3]"),
    modal: document.querySelector("[data-modal]"),
  };

refs.openModalBtn.addEventListener("click", toggleModal);  
  refs.closeModalBtn.addEventListener("click", toggleModal);
  refs.openModalBtn2.addEventListener("click", toggleModal);
  refs.closeModalBtn2.addEventListener("click", toggleModal);
  refs.openModalBtn3.addEventListener("click", toggleModal);
  refs.closeModalBtn3.addEventListener("click", toggleModal);

  function toggleModal() {
    document.body.classList.toggle("modal-open");
    refs.modal.classList.toggle("is-hidden");
  }
})();
