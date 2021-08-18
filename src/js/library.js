import movieTemplate from '../templates/movie-card.hbs';
import modalWindow from './modal-window';
import getMoviesFromLocalStorage from './getMoviesListFromLocalStorage';
import { buttonValues } from './modalButtonsValues';

const watchedGalleryList = document.querySelector('.watched-gallery');

// получить список фильмов из localStorsge
export let watchedArray = getMoviesFromLocalStorage('watched');
export let queueArray = getMoviesFromLocalStorage('queue');

// ========== функция отображения вкладки WATCHED ======e====
export function watchedMovies() {
  const ArrayForRendering = watchedArray.map(el => Object.values(el));
  // выводим сообщение, если в библиотеке нет фильмов
  if (!ArrayForRendering.length) {
    watchedGalleryList.innerHTML = `<div style="display: block; width: 100%; min-height: 50px;">Список просмотренных фильмов пуст...</div>`;
    return;
  }
  // если есть фильмы, создаём и рендерим разметку
  const watchedMarkup = ArrayForRendering.flat()
    .map(el => movieTemplate(el))
    .join('');
  watchedGalleryList.innerHTML = watchedMarkup;
  console.log('это загрузка библиотеки');
}

// ============================================================================================
// ========================================  L I B R A R Y  ===================================
// ============================================================================================
// главная функция библиотеки, дает возможность добавлять и удалять фильмы в свою библиотеку
export function myMovieLibrary(movie_obj, id, watchedBtn, queueBtn) {
  watchedBtn.addEventListener('click', () => {
    console.log('кнопка ADD: ');
    addToWatched(watchedArray, id);
    watchedMovies();
    modalWindow();
  });

  queueBtn.addEventListener('click', () => {
    console.log('кнопка REMOVE: ');
    removeFromWatched(watchedArray, id, movie_obj);
    watchedMovies();
    modalWindow();
  });
  // добавить в WATCHED
  function addToWatched() {
    // если фильма нет в библиотеке - добавляем его
    if (!watchedArray.some(el => Object.keys(el).includes(id))) {
      watchedArray.push({ [id]: movie_obj });
      localStorage.setItem('watched', JSON.stringify(watchedArray));
    }
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
}
