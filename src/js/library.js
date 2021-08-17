import movieTemplate from '../templates/movie-card.hbs';
import modalWindow from './modal-window';

const homeGalleryList = document.querySelector('.home-gallery');
let watchedArray = Array.isArray(JSON.parse(localStorage.getItem('watched')))
  ? JSON.parse(localStorage.getItem('watched'))
  : [];

export function watchedMovies() {
  const ArrayForRendering = watchedArray.map(el => Object.values(el));
  const watchedMarkup = ArrayForRendering.flat()
    .map(el => movieTemplate(el))
    .join('');
  homeGalleryList.innerHTML = watchedMarkup;
  console.log('это загрузка библиотеки');
}

// ============================================================================================
// ========================================  L I B R A R Y  ===================================
// ============================================================================================
// главная функция библиотеки, дает возможность добавлять и удалять фильмы в свою библиотеку
export function myMovieLibrary(movie_obj, id) {
  //получить ссылки на кнопки
  const watchedBtn = document.querySelector('[data-category="watched"]');
  const queueBtn = document.querySelector('[data-category="queue"]');

  //   let watchedArray = Array.isArray(JSON.parse(localStorage.getItem('watched')))
  //     ? JSON.parse(localStorage.getItem('watched'))
  //     : [];
  let queueArray = [];

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
