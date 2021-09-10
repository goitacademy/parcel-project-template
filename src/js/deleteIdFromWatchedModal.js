import toggleBtn from './toggleBtn.js'

export default function deleteIdFromWatchedModal(evt) {
    let localStorageQueue = JSON.parse(localStorage.getItem('Watched'));
    if (localStorageQueue.includes(OPEN_NOW_FILM_ID)) {
        localStorageQueue = localStorageQueue.filter((el) => el !== OPEN_NOW_FILM_ID);
        localStorage.setItem('Watched', JSON.stringify(localStorageQueue));
        toggleBtn(evt.target)
    }
}