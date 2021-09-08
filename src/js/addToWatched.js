import { idQuery } from './modal';
let watchedArr = [];

export default function addToWatched() {
  if (watchedArr.includes(idQuery)) {
    return;
  }
  let filmsIdInLocalStorage = JSON.parse(localStorage.getItem('Watched'));
  if (filmsIdInLocalStorage !== []) {
    watchedArr = filmsIdInLocalStorage;
  }
  if (filmsIdInLocalStorage === null) {
    filmsIdInLocalStorage = [];
    watchedArr = filmsIdInLocalStorage;
  }
  if (filmsIdInLocalStorage.includes(idQuery)) {
    return;
  }
  watchedArr.push(idQuery);
  localStorage.setItem('Watched', JSON.stringify(watchedArr));
}
