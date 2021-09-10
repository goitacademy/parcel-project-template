import addToWatched from './addToWatched.js';
import addToQueue from './addToQueue.js';
import deleteFromQueueList from './deleteFromQueueList.js';
import deleteFromWathedList from './deleteFromWatchedList.js';



export default function toggleBtn(btn) {
    console.log("hi")
    let localKay = '';
    let callbackAdd = null;
    let callbackDelete = null;

    if (btn.classList.contains('queueBtn-js')) {
        localKay = 'Query';
        callbackAdd = addToQueue;
        callbackDelete = deleteFromQueueList;
    } else {
        localKay = 'Wathed';
        callbackAdd = addToWatched;
        callbackDelete = deleteFromQueueList;
    }

    if (btn.classList.contains('button-white')) {
        btn.classList.replace('button-white', 'button-orange');
        btn.textContent = `Delete from ${localKay}`;
        btn.removeEventListener("click", callbackAdd);
        btn.addEventListener('click', callbackDelete);
    } else {
        btn.classList.replace('button-orange', 'button-white');
        btn.textContent = `Add to Query ${localKay}`;
        btn.removeEventListener("click", callbackDelete);
        btn.addEventListener('click', addToQueue);
    }
}