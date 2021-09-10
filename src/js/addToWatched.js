import { idQuery } from './modal';
import toggleBtn from './toggleBtn';
let watchedArr = [];

export default function addToWatched(event) { 
  let eventBtn = event.target
  // console.log(eventBtn);
  // if (watchedArr.includes(idQuery)) {
  //   return;
  // }
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
  toggleBtn(eventBtn);
  watchedArr.push(idQuery);
  localStorage.setItem('Watched', JSON.stringify(watchedArr));
}
