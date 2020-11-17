import storage from './storage';


// const addToWatchedBtn = document.querySelector('.addToWatchedBtn');
// const addToQueueBtn = document.querySelector('.addToQueueBtn');

//.dataset.id; Буде гдето брать 
let id = 111;

// addToWatchedBtn.addEventListener('click', addToWatchedList);
// addToQueueBtn.addEventListener('click', addToQueueList);

function addToWatchedList(event) {
    const watchedList = storage.load('WatchedList');
    console.log("watchedList", storage.load('WatchedList'))

    if ( watchedList === undefined) {
        storage.save('WatchedList', [id]);
        return
    }

    watchedList.push(id);
    storage.save('WatchedList', watchedList);

}

function addToQueueList(event) {
    const queueList = storage.load('QueueList');
    console.log('QueueList',  storage.load('QueueList'))

    if ( queueList === undefined) {
        storage.save('QueueList', [id]);
        return
    }

    queueList.push(id);
    storage.save('QueueList', queueList);

}