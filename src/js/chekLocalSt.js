import addToWatched from './addToWatched.js';
import addToQueue from './addToQueue.js';
import deleteFromQueueList from './deleteFromQueueList.js';
import deleteFromWathedList from './deleteFromWatchedList.js';

// export default function checkLocalSt(idQuery, queueBtn, watchedBtn) {
//     let localStorageQueue = JSON.parse(localStorage.getItem('Queue'));
//     let localStorageWatched = JSON.parse(localStorage.getItem('Watched'));

//     if (localStorageQueue.includes(idQuery)) {
//         queueBtn.classList.replace('button-white', 'button-orange');
//         queueBtn.textContent = 'Delete from Query';
//         queueBtn.addEventListener('click', deleteFromQueueList);

        
//     } else {
//         queueBtn.addEventListener('click', addToQueue);    
//     }

//     if (localStorageWatched.includes(idQuery)) {
//         watchedBtn.classList.replace('button-white', 'button-orange');
//         watchedBtn.textContent = 'Delete from Wathed';
//         watchedBtn.addEventListener('click', deleteFromWathedList);
//     } else {
//         watchedBtn.addEventListener('click', addToQueue);
//     }
// }

export default function checkLocalSt(idQuery, queueBtn, watchedBtn) {
    let localStorageQueue = JSON.parse(localStorage.getItem('Queue'));
    let localStorageWatched = JSON.parse(localStorage.getItem('Watched'));
    console.log(localStorageQueue === null)
    console.log(queueBtn);

    
    if (localStorageQueue === null) {
        queueBtn.addEventListener('click', addToQueue);
        watchedBtn.addEventListener('click', addToWatched);
    }
    if (localStorageQueue.includes(idQuery)) {
        toggleBtn(queueBtn);
    }
        // queueBtn.classList.replace('button-white', 'button-orange');
        // queueBtn.textContent = 'Delete from Query';
        // queueBtn.addEventListener('click', deleteFromQueueList);


    // } else {
    //     queueBtn.addEventListener('click', addToQueue);
        
    // }

    if (localStorageWatched.includes(idQuery)) {
        toggleBtn(watchedBtn);
    }
    //     watchedBtn.classList.replace('button-white', 'button-orange');
    //     watchedBtn.textContent = 'Delete from Wathed';
    //     watchedBtn.addEventListener('click', deleteFromWathedList);
    // } else {
    //     watchedBtn.addEventListener('click', addToWatched);
        
    // }
}

export function toggleBtn(btn) {

    if (btn.classList.contains('queueBtn-js')) {
        if (btn.classList.contains('button-white')) {
            btn.classList.replace('button-white', 'button-orange');
            btn.textContent = 'Delete from Query';
            btn.removeEventListener("click", addToQueue);
            btn.addEventListener('click', deleteFromQueueList);
        } else {
            btn.classList.replace('button-orange', 'button-white');
            btn.textContent = 'Add to Query';
            btn.addEventListener('click', addToQueue);

        }
    } else {
        if (btn.classList.contains('button-white')) {
            btn.classList.replace('button-white', 'button-orange');
            btn.textContent = 'Delete from Wathed';
            btn.addEventListener('click', deleteFromWathedList);
        } else {
            btn.addEventListener('click', addToWatched);
        }
    }
}




