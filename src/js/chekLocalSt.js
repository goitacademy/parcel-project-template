import toggleBtn from './toggleBtn.js';

export default function checkLocalSt(queueBtn, watchedBtn) {
    let localStorageQueue = JSON.parse(localStorage.getItem('Queue'));
    let localStorageWatched = JSON.parse(localStorage.getItem('Watched'));
    
    if (localStorageQueue === null || localStorageWatched === null) {
        return;
    }

    if (localStorageQueue.includes(OPEN_NOW_FILM_ID)) {
        toggleBtn(queueBtn);
    }

    if (localStorageWatched.includes(OPEN_NOW_FILM_ID)) {
        toggleBtn(watchedBtn);
    }
}




