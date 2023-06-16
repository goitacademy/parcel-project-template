(() => {
  const refs = {
    openModalBtn: document.querySelector("[icecream-modal-open]"),
    closeModalBtn: document.querySelector("[icecream-modal-close]"),
    modal: document.querySelector("[icecream-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("products__overlay--is-hidden");
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector("[icecoffee-modal-open]"),
    closeModalBtn: document.querySelector("[icecoffee-modal-close]"),
    modal: document.querySelector("[icecoffee-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("products__overlay--is-hidden");
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector("[milkshakes-modal-open]"),
    closeModalBtn: document.querySelector("[milkshakes-modal-close]"),
    modal: document.querySelector("[milkshakes-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("products__overlay--is-hidden");
  }
})();
