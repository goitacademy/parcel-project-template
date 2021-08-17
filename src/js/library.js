import movieTemplate from '../templates/movie-card.hbs';

// export function libraryCheck(id) {
//   const savedMovie = localStorage.getItem(id);
//   if (savedMovie) {
//     const markupLibrary = movieTemplate(JSON.parse(savedMovie));
//   }
// }

export function watchedMovies() {
  const galleryUrl = document.querySelector('.movies');
  // загрузить список просмотренных
  let watchedArray = Array.isArray(JSON.parse(localStorage.getItem('watched')))
    ? JSON.parse(localStorage.getItem('watched'))
    : [];
  const watchedMarkup = movieTemplate(watchedArray[0]);
  galleryUrl.innerHTML = watchedMarkup;
}

// ============================================================================================
// ========================================  L I B R A R Y  ===================================
// ============================================================================================
// главная функция библиотеки, дает возможность добавлять и удалять фильмы в свою библиотеку
export function myMovieLibrary(movie_obj, id) {
  //получить ссылки на кнопки
  const watchedBtn = document.querySelector('[data-category="watched"]');
  const queueBtn = document.querySelector('[data-category="queue"]');

  let watchedArray = Array.isArray(JSON.parse(localStorage.getItem('watched')))
    ? JSON.parse(localStorage.getItem('watched'))
    : [];
  let queueArray = [];

  watchedBtn.addEventListener('click', () => {
    console.log('кнопка ADD: ');
    addToWatched(watchedArray, id);
  });

  queueBtn.addEventListener('click', () => {
    console.log('кнопка REMOVE: ');
    removeFromWatched(watchedArray, id, movie_obj);
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

//===================== рендер карточек из библиотеки ====================
function renderMovieFromLibrary(movie_obj) {
  const markup = movieTemplate(movie_obj);
  // console.log(markup);
  return markup;
}
