import { idQuery } from './modal';
import toggleBtn from './toggleBtn.js';
let queueArr = [];

export default function addToQueue(e) {
  let eventBtn = e.target;
  let filmId = e.target.dataset.id;
  let filmsIdInLocalStorage = JSON.parse(localStorage.getItem('Queue'));
  if (filmsIdInLocalStorage !== []) {
    queueArr = filmsIdInLocalStorage;
  }
  if (filmsIdInLocalStorage === null) {
    filmsIdInLocalStorage = [];
    queueArr = filmsIdInLocalStorage;
  }
  if (filmsIdInLocalStorage.includes(filmId)) {
    return;
  }

  queueArr.push(filmId);
  localStorage.setItem('Queue', JSON.stringify(queueArr));
  toggleBtn(eventBtn);
}
