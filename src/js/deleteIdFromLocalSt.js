import themeNow from './addIdToLocalSt.js'
import toggleBtn from './toggleBtn.js'
import createQueueMarkup from './createQueueMarkup.js';

export default function deleteIdFromQueueModal(evt) {
    let openNowId = localStorage.getItem('OpenNow');
    let localStorageQueue = JSON.parse(localStorage.getItem('Queue'));
    if (localStorageQueue.includes(openNowId)) {
        localStorageQueue = localStorageQueue.filter((el) => el !== openNowId);
        localStorage.setItem('Queue', JSON.stringify(localStorageQueue));
        console.log('tartet from del',evt.target)
        toggleBtn(evt.target)
    }
}

// export function addIdToLSt(idQuery) {
//     console.log(idQuery);
// }