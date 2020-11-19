(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    program: document.querySelector("[program-closed]"),
    teacher: document.querySelector("[teacher-closed]"),
    methods: document.querySelector("[methods-closed]"),
    footer: document.querySelector("[footer-closed]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
  refs.program.addEventListener("click", toggleModal);
  refs.teacher.addEventListener("click", toggleModal);
  refs.methods.addEventListener("click", toggleModal);
  refs.footer.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();
