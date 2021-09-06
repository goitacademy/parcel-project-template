import { idQuery } from './modal';
let watchedArr = [];

export default function addToWatched() {
  if (watchedArr.includes(idQuery)) {
    return;
  }
  watchedArr.push(idQuery);
  localStorage.setItem('Watched', JSON.stringify(watchedArr));
}
