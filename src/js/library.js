import movieTemplate from '../templates/movie-card.hbs';
import modalWindow from './modal-window';
import getMoviesFromLocalStorage from './getMoviesListFromLocalStorage';
import { buttonValues } from './modalButtonsValues';
import watchedMovies from './watchedMovies';
import queueMovies from './queueMovies';

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
      watchedMovies(watchedArray);
      modalWindow();
    }
    if (value == buttonValues.watchedRemove) {
      watchedBtn.innerHTML = buttonValues.watchedAdd;
      removeFromWatched(watchedArray, id, movie_obj);
      watchedMovies(watchedArray);
      modalWindow();
    }
  });

  queueBtn.addEventListener('click', () => {
    const value = queueBtn.innerHTML.toLowerCase();
    console.log(value);
    if (value == buttonValues.queueAdd) {
      queueBtn.innerHTML = buttonValues.queueRemove;
      addToQueue(queueArray, id);
      queueMovies(queueArray);
      modalWindow();
    }
    if (value == buttonValues.queueRemove) {
      queueBtn.innerHTML = buttonValues.queueAdd;
      removeFromQueue(queueArray, id, movie_obj);
      queueMovies(queueArray);
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
    }
    console.log('добавили фильм');
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
  }

  // добавить в QUEUE
  function addToQueue() {
    // если фильма нет в библиотеке - добавляем его
    if (!queueArray.some(el => Object.keys(el).includes(id))) {
      queueArray.push({ [id]: movie_obj });
      localStorage.setItem('queue', JSON.stringify(queueArray));
    }
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
  }
}
