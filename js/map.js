(() => {
  const refs = {
    openMapBtn: document.querySelector('[data-map-open]'),
    closeMapBtn: document.querySelector('[data-map-close]'),
    map: document.querySelector('[data-map]'),
  };

  refs.openMapBtn.addEventListener('click', toggleMap);
  refs.closeMapBtn.addEventListener('click', toggleMap);

  function toggleMap() {
    refs.map.classList.toggle('is-hidden');
    document.body.classList.toggle('modal-open');
}
})();