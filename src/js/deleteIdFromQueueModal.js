import toggleBtn from './toggleBtn.js';

export default function deleteIdFromQueueModal(evt) {
  let localStorageQueue = JSON.parse(localStorage.getItem('Queue'));
  if (localStorageQueue.includes(OPEN_NOW_FILM_ID)) {
    localStorageQueue = localStorageQueue.filter(el => el !== OPEN_NOW_FILM_ID);
    localStorage.setItem('Queue', JSON.stringify(localStorageQueue));
    toggleBtn(evt.target);
  }
}
