import addToWatched from './addToWatched.js';
import addToQueue from './addToQueue.js';
import deleteIdFromQueueModal from './deleteIdFromQueueModal.js';
import deleteIdFromWatchedModal from './deleteIdFromWatchedModal';



export default function toggleBtn(btn) {
    let localKay = '';
    let callbackAdd = null;
    let callbackDelete = null;

    if (btn.classList.contains('queueBtn-js')) { 
        localKay = 'Query';
        callbackAdd = addToQueue;
        callbackDelete = deleteIdFromQueueModal;
    } else {
        localKay = 'Watched';
        callbackAdd = addToWatched;
        callbackDelete = deleteIdFromWatchedModal;
    }

    if (btn.classList.contains('button-white')) {
        btn.classList.replace('button-white', 'button-orange');
        btn.textContent = `Delete from ${localKay}`;
        btn.removeEventListener('click', callbackAdd);
        btn.addEventListener('click', callbackDelete);
    } else {
        btn.classList.replace('button-orange', 'button-white');
        btn.textContent = `Add to ${localKay}`;
        btn.removeEventListener('click', callbackDelete);
        btn.addEventListener('click', callbackAdd);
    }
}