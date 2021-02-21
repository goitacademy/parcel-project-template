(() => {
  const refs = {
    openMapBtn: document.querySelector('[data-modal-map-open]'),
    closeMapBtn: document.querySelector('[data-modal-map-close]'),
    modalMap: document.querySelector('[data-modal-map]'),
    openFranchiseBtn: document.querySelector('[data-modal-franchise-open]'),
    closeFranchiseBtn: document.querySelector('[data-modal-franchise-close]'),
    modalFranchise: document.querySelector('[data-modal-franchise]'),
  };

  refs.openMapBtn.addEventListener('click', toggleModalMap);
  refs.closeMapBtn.addEventListener('click', toggleModalMap);
  refs.openFranchiseBtn.addEventListener('click', toggleModalFranchise);
  refs.closeFranchiseBtn.addEventListener('click', toggleModalFranchise);

  function toggleModalMap() {
    refs.modalMap.classList.toggle('contacts-backdrop-hidden');
  }
  function toggleModalFranchise() {
    refs.modalFranchise.classList.toggle('franchise-backdrop-hidden');
  }
})();
