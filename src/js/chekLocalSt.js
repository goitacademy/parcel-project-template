import toggleBtn from './toggleBtn.js';

export default function checkLocalSt(idQuery, queueBtn, watchedBtn) {
    let localStorageQueue = JSON.parse(localStorage.getItem('Queue'));
    let localStorageWatched = JSON.parse(localStorage.getItem('Watched'));

    
    if (localStorageQueue === null) {
        return;
    }

    if (localStorageQueue.includes(idQuery)) {
        toggleBtn(queueBtn);
    }

    if (localStorageWatched.includes(idQuery)) {
        toggleBtn(watchedBtn);
    }
}




