import { idQuery } from './modal';
let queueArr = [];

export default function addToQueue() {
  if (queueArr.includes(idQuery)) {
    return;
  }
  let filmsIdInLocalStorage = JSON.parse(localStorage.getItem('Queue'));
  if (filmsIdInLocalStorage !== []) {
    queueArr = filmsIdInLocalStorage;
  }
  if (filmsIdInLocalStorage === null) {
    filmsIdInLocalStorage = [];
    queueArr = filmsIdInLocalStorage;
  }
  if (filmsIdInLocalStorage.includes(idQuery)) {
    return;
  }
  queueArr.push(idQuery);
  localStorage.setItem('Queue', JSON.stringify(queueArr));
}
