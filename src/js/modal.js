var openModalEntry = document.querySelectorAll(".btn_sign");
var showModalEntry = document.querySelectorAll(".modal-window_entry");
var closeModalEntry = document.querySelectorAll(".close-entry");

for(var i = 0; i < openModalEntry.length; i++){
  openModalEntry[i].addEventListener("click", function(event) {
    event.preventDefault();
    showModalEntry[0].classList.add("show-entry");
  });
};

for(var i = 0; i < closeModalEntry.length; i++){
  closeModalEntry[i].addEventListener("click", function(event) {
    event.preventDefault();
    showModalEntry[0].classList.remove("show-entry");
  });
};


(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle("modal-open")
    refs.modal.classList.toggle('is-hidden');
  }
})();