function openModal() {
  let btn = document.querySelector('#open-modal'),
    modal = document.querySelector('.modal-area'),
    modalbox = document.querySelector('.modal-area-box');
  btn.addEventListener('click', function () {
    modal.style.display = 'flex';
  });
  modal.addEventListener('click', function () {
    modal.style.display = 'none';
  });
  modalbox.addEventListener('click', function (e) {
    e.stopPropagation();
  });
}
openModal();
