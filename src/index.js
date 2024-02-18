(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-menu-open]'),
    closeModalBtn: document.querySelector('[data-menu-close]'),
    modal: document.querySelector('[data-menu]'),
  };

  refs.openModalBtn.addEventListener('click', openModal);
  refs.closeModalBtn.addEventListener('click', closeModal);

  function openModal() {
    refs.modal.style.visibility = 'visible';
  }

  function closeModal() {
    refs.modal.style.visibility = 'hidden';
  }
})();

//thank - you;//

var modal = document.getElementById('modal');
var openModalBtn = document.getElementById('openModalBtn');
var closeModal = document.getElementById('closeModal');

openModalBtn.addEventListener('click', function () {
  modal.style.display = 'block';
});

closeModal.addEventListener('click', function () {
  modal.style.display = 'none';
});

window.addEventListener('click', function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
});
