import getMoviesFromLocalStorage from './getMoviesListFromLocalStorage';
import { watchedArray, queueArray } from './library';

// при клике по карточке фильма, проверяет, есть ли этот фильм в библиотеке
// если есть:
// 1) то не нужно делать запрос на сервер за подробной информацией, а брать из localStorage
// 2) отображать соответствующие надписи на кнопках в модалке (ADD или REMOVE)
export function libraryWatchedCheck(id) {
  const movieFromWatched = isMovieInLibrary(id, watchedArray);

  if (movieFromWatched) {
    return movieFromWatched;
  } else {
    return null;
  }
}

export function libraryQueueCheck(id) {
  const movieFromQueue = isMovieInLibrary(id, queueArray);

  if (movieFromQueue) {
    return movieFromQueue;
  } else {
    return null;
  }
}

// узнать, есть ли в localStorage фильм с таким id,
// если есть - вернуть его, если нет - вернуть -1
function isMovieInLibrary(id, list) {
  const ind = list.findIndex(el => Object.keys(el).includes(id));
  if (ind > -1) {
    return list[ind][id];
  }
  return null;
}
