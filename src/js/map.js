(() => {
  const refs = {
    openmapBtn: document.querySelector('[data-map-open]'),
    closemapBtn: document.querySelector('[data-map-close]'),
    map: document.querySelector('[data-map]'),
  };

  refs.openmapBtn.addEventListener('click', togglemap);
  refs.closemapBtn.addEventListener('click', togglemap);

  function togglemap() {
    refs.map.classList.toggle('is-hidden');
  }
})();
