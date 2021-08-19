import movieTemplate from '../templates/movie-card.hbs';
import modalWindow from './modal-window';
import getMoviesFromLocalStorage from './getMoviesListFromLocalStorage';
import { buttonValues } from './modalButtonsValues';
import watchedMovies from './watchedMovies';
import queueMovies from './queueMovies';
import Pagination from 'tui-pagination';

const containerWatched = document.getElementById('pagination__watched');
const containerQueue = document.getElementById('pagination__queue');

let size = 9;
export let newWatchedArray = [];
export let newQueueArray = [];

// Пагинация дла Watched
export const paginationWatched = new Pagination(containerWatched, {
  itemsPerPage: 9,
  page: 1,
});

// Пагинация дла Queue
export const paginationQueue = new Pagination(containerQueue, {
  itemsPerPage: 9,
  page: 1,
});

// ======== получить список фильмов из localStorsge ===========
export let watchedArray = getMoviesFromLocalStorage('watched');
export let queueArray = getMoviesFromLocalStorage('queue');

// ============================================================================================
// ========================================  L I B R A R Y  ===================================
// ============================================================================================
// главная функция библиотеки, дает возможность добавлять и удалять фильмы в свою библиотеку
export function myMovieLibrary(movie_obj, id, watchedBtn, queueBtn) {
  watchedBtn.addEventListener('click', () => {
    const value = watchedBtn.innerHTML.toLowerCase();
    if (value == buttonValues.watchedAdd) {
      watchedBtn.innerHTML = buttonValues.watchedRemove;
      addToWatched(watchedArray, id);
      watchedMovies(newWatchedArray[0]);
      modalWindow();
    }
    if (value == buttonValues.watchedRemove) {
      watchedBtn.innerHTML = buttonValues.watchedAdd;
      removeFromWatched(watchedArray, id, movie_obj);
      watchedMovies(newWatchedArray[0]);
      modalWindow();
    }
  });

  queueBtn.addEventListener('click', () => {
    const value = queueBtn.innerHTML.toLowerCase();
    console.log(value);
    if (value == buttonValues.queueAdd) {
      queueBtn.innerHTML = buttonValues.queueRemove;
      addToQueue(queueArray, id);
      queueMovies(newQueueArray[0]);
      modalWindow();
    }
    if (value == buttonValues.queueRemove) {
      queueBtn.innerHTML = buttonValues.queueAdd;
      removeFromQueue(queueArray, id, movie_obj);
      queueMovies(newQueueArray[0]);
      modalWindow();
    }
  });

  // ==================== ФУНКЦИИ ОБРАБОТКИ КЛИКОВ: ========================
  // добавить в WATCHED
  function addToWatched() {
    // если фильма нет в библиотеке - добавляем его
    if (!watchedArray.some(el => Object.keys(el).includes(id))) {
      watchedArray.push({ [id]: movie_obj });
      localStorage.setItem('watched', JSON.stringify(watchedArray));
    for (let i = 0; i <Math.ceil(watchedArray.length/size); i++){ 
    newWatchedArray[i] = watchedArray.slice((i*size), (i*size) + size); 
}
}
    console.log('добавили фильм');
    paginationWatched.reset(watchedArray.length);
  }

  // удалить из WATCHED
  function removeFromWatched() {
    if (watchedArray.length > 0) {
      const position = watchedArray.findIndex(el => Object.keys(el).includes(id));
      if (position > -1) {
        watchedArray.splice(position, 1);
        localStorage.setItem('watched', JSON.stringify(watchedArray));
      }
    }
    for (let i = 0; i <Math.ceil(watchedArray.length/size); i++){ 
    newWatchedArray[i] = watchedArray.slice((i*size), (i*size) + size); 
}
    paginationWatched.reset(watchedArray.length);
  }

  // добавить в QUEUE
  function addToQueue() {
    // если фильма нет в библиотеке - добавляем его
    if (!queueArray.some(el => Object.keys(el).includes(id))) {
      queueArray.push({ [id]: movie_obj });
      localStorage.setItem('queue', JSON.stringify(queueArray));
      for (let i = 0; i <Math.ceil(queueArray.length/size); i++){ 
    newQueueArray[i] = queueArray.slice((i*size), (i*size) + size); 
}

    }
    paginationQueue.reset(queueArray.length);
  }

  // удалить из QUEUE
  function removeFromQueue() {
    if (queueArray.length > 0) {
      const position = queueArray.findIndex(el => Object.keys(el).includes(id));
      if (position > -1) {
        queueArray.splice(position, 1);
        localStorage.setItem('queue', JSON.stringify(queueArray));
      }
    }
    paginationQueue.reset(queueArray.length);
for (let i = 0; i <Math.ceil(queueArray.length/size); i++){ 
    newQueueArray[i] = queueArray.slice((i*size), (i*size) + size); 
}

  }
}
paginationWatched.reset(watchedArray.length);
paginationQueue.reset(queueArray.length);

// Разбивка для Watched

for (let i = 0; i < Math.ceil(watchedArray.length / size); i++) {
  newWatchedArray[i] = watchedArray.slice(i * size, i * size + size);
}

// Разбивка для Queue

for (let i = 0; i < Math.ceil(queueArray.length / size); i++) {
  newQueueArray[i] = queueArray.slice(i * size, i * size + size);
}

paginationWatched.on('afterMove', onPaginationWatchedClick);

function onPaginationWatchedClick(event) {
window.scrollTo(0, 0);
  const currentWatchedPage = event.page;
  watchedMovies(newWatchedArray[currentWatchedPage - 1]);
  modalWindow();
}

paginationQueue.on('afterMove', onPaginationQueueClick);

function onPaginationQueueClick(event) {
  window.scrollTo(0, 0);

  const currentQueuePage = event.page;
  queueMovies(newQueueArray[currentQueuePage - 1]);
  modalWindow();
}
