import storage from './storage';


export function onModalButtons() {
    const addToWatchedBtn = document.querySelector('.js-watched');
	const addToQueueBtn = document.querySelector('.js-queue');
	addToWatchedBtn.addEventListener('click', onWatchedBtn);
	addToQueueBtn.addEventListener('click', onQueueBtn);

	const watchedList = storage.load('WatchedList');
	const queueList = storage.load('QueueList');

        if (watchedList !== undefined && watchedList.includes(addToWatchedBtn.dataset.id)) {
            addToWatchedBtn.textContent = 'remove from watched';
            addToWatchedBtn.dataset.action = 'remove';
	    }

	    if (queueList!== undefined && queueList.includes(addToQueueBtn.dataset.id)) {
            addToQueueBtn.textContent = 'remove from queue';
            addToQueueBtn.dataset.action = 'remove';
        }
}

function onWatchedBtn (event) {
	event.preventDefault();

	if (event.target.dataset.action === 'add') {
		addToWatchedList(event);
        event.target.textContent = 'remove from watched';
        event.target.dataset.action = 'remove';
        
        return;
	}

    storage.remove('WatchedList', event.target.dataset.id);
    event.target.textContent = 'add to watched';
    event.target.dataset.action = 'add';
	
}

function onQueueBtn (event) {
	event.preventDefault();

	if (event.target.dataset.action === 'add') {
		addToQueueList(event);
        event.target.textContent = 'remove from queue';
        event.target.dataset.action = 'remove';

        return;
    }
    
    storage.remove('QueueList', event.target.dataset.id);
    event.target.textContent = 'add to queue';
    event.target.dataset.action = 'add';
	
}

function addToWatchedList(event) {
    const watchedList = storage.load('WatchedList');

    if ( watchedList === undefined) {
        storage.save('WatchedList', [event.target.dataset.id]);
        return
    }

    watchedList.push(event.target.dataset.id);
    storage.save('WatchedList', watchedList);

}

function addToQueueList(event) {
    const queueList = storage.load('QueueList');
    if ( queueList === undefined) {
        storage.save('QueueList', [event.target.dataset.id]);

        return
    }

    queueList.push(event.target.dataset.id);
    storage.save('QueueList', queueList);
export { addToWatchedList, addToQueueList }
}

