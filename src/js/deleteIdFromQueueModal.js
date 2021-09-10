
import toggleBtn from './toggleBtn.js'

export default function deleteIdFromQueueModal(evt) {
    let localStorageQueue = JSON.parse(localStorage.getItem('Queue'));
    if (localStorageQueue.includes(OPEN_NOW_FILM_ID)) {
        localStorageQueue = localStorageQueue.filter((el) => el !== OPEN_NOW_FILM_ID);
        localStorage.setItem('Queue', JSON.stringify(localStorageQueue));
        toggleBtn(evt.target);
    }
}



// export default function deleteIdFromQueueModal(evt) {
//     let localStorageKay = '';
//     if (evt.target.classList.contains('queueBtn-js')) {
//         localStorageKay = 'Query';
//         console.log(JSON.parse(localStorage.getItem(`${localStorageKay}`)))
//     } else {
//         localStorageKay = 'Watched';
//     }
//     let localStorageQueue = JSON.parse(localStorage.getItem(localStorageKay));
//     if (localStorageQueue.includes(OPEN_NOW_FILM_ID)) {
//         localStorageQueue = localStorageQueue.filter((el) => el !== OPEN_NOW_FILM_ID);
//         localStorage.setItem(localStorageKay, JSON.stringify(localStorageQueue));
//         console.log('tartet from del', evt.target)
//     }
// }


