import storage from './storage';

let btnWatched = null;
let btnQueue = null;

export function onModalButtons() {
    btnWatched = document.querySelector('.js-watched');
    btnQueue = document.querySelector('.js-queue');
    btnWatched.addEventListener('click', onWatchedBtn);
    btnQueue.addEventListener('click', onQueueBtn);

    const watchedList = storage.load(storage.keys.WATCHEDKEY);
    const queueList = storage.load(storage.keys.QUEUEKEY);

    if (watchedList && watchedList.includes(btnWatched.dataset.id)) {
        btnWatched.textContent = 'remove from watched';
        btnWatched.dataset.action = 'remove';
    }

    if (queueList && queueList.includes(btnQueue.dataset.id)) {
        btnQueue.textContent = 'remove from queue';
        btnQueue.dataset.action = 'remove';
    }
}

function onWatchedBtn(event) {
    event.target.blur();

    if (event.target.dataset.action === 'add') {
        addToWatchedList(event);
        renameWatchedBtn(event);

        return;
    }

    storage.remove(storage.keys.WATCHEDKEY, event.target.dataset.id);
    event.target.textContent = 'add to watched';
    event.target.dataset.action = 'add';
}

function onQueueBtn(event) {
    event.target.blur();

    if (event.target.dataset.action === 'add') {
        addToQueueList(event);
        renameQueueBtn(event);

        return;
    }

    storage.remove(storage.keys.QUEUEKEY, event.target.dataset.id);
    event.target.textContent = 'add to queue';
    event.target.dataset.action = 'add';

}

function addToWatchedList(event) {
    const watchedList = storage.load(storage.keys.WATCHEDKEY);

    if (!watchedList) {
        storage.save(storage.keys.WATCHEDKEY, [event.target.dataset.id]);
        return
    }

    watchedList.push(event.target.dataset.id);
    storage.save(storage.keys.WATCHEDKEY, watchedList);
}

function addToQueueList(event) {
    const queueList = storage.load(storage.keys.QUEUEKEY);

    if (!queueList) {
        storage.save(storage.keys.QUEUEKEY, [event.target.dataset.id]);
        return
    }

    queueList.push(event.target.dataset.id);
    storage.save(storage.keys.QUEUEKEY, queueList);
}

function renameQueueBtn(event) {
    event.target.textContent = 'remove from queue';
    event.target.dataset.action = 'remove';
}

function renameWatchedBtn(event) {
    event.target.textContent = 'remove from watched';
    event.target.dataset.action = 'remove';
}

export function clearListener() {
    btnWatched.removeEventListener('click', onWatchedBtn);
    btnQueue.removeEventListener('click', onQueueBtn);
}