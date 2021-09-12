import { idQuery } from './modal';
import toggleBtn from './toggleBtn';
let watchedArr = [];

export default function addToWatched(e) {
  let eventBtn = e.target;
  let filmId = e.target.dataset.id;
  let filmsIdInLocalStorage = JSON.parse(localStorage.getItem('Watched'));
  if (filmsIdInLocalStorage !== []) {
    watchedArr = filmsIdInLocalStorage;
  }
  if (filmsIdInLocalStorage === null) {
    filmsIdInLocalStorage = [];
    watchedArr = filmsIdInLocalStorage;
  }
  if (filmsIdInLocalStorage.includes(filmId)) {
    return;
  }

  watchedArr.push(filmId);
  localStorage.setItem('Watched', JSON.stringify(watchedArr));
  toggleBtn(eventBtn);
}
