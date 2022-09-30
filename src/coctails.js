import { writeUserCoctaile, removeUserCoctaile } from './servise/firebase.js';

async function addToFav(e) {
  const btn = e.target;
  const cockteileId = btn.dataset.cocktaileid;
  writeUserCoctaile(cockteileId, { cockteileId });
  btn.textContent = 'Remove';
  btn.classList.add('btn__svg-fav');
  btn.addEventListener(
    'click',
    () => {
      removeUserCoctaile(cockteileId, { cockteileId });
      btn.textContent = 'add to';
      btn.classList.remove('btn__svg-fav');
      btn.addEventListener('click', addToFav, { once: true });
    },
    { once: true }
  );
}

export function wrireRemovetCoctaileFunction() {
  const favoriteBtn = document.querySelectorAll('[data-cocktaileId]');
  favoriteBtn.forEach(btn =>
    btn.addEventListener('click', addToFav, {
      once: true,
    })
  );
}
