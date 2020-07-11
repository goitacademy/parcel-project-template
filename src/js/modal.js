const refs = {
  openModalBtn: document.querySelectorAll('[data-open-modal]'),
  closeModalBtn: document.querySelector('[data-close-modal]'),
  backdrop: document.querySelector('[data-backdrop]'),
};

for (var OMB of refs.openModalBtn) {
  OMB.addEventListener('click', toggleModal)}
  refs.closeModalBtn.addEventListener('click', toggleModal);

refs.backdrop.addEventListener('click', logBackdropClick);

function toggleModal() {
  document.body.classList.toggle('modal-open');
  refs.backdrop.classList.toggle('is-hidden');
}

function logBackdropClick() {
  console.log('Это клик в бекдроп');
}
