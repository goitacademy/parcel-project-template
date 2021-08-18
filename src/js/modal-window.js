import modalTemplate from '../templates/modal-card.hbs';
import { myMovieLibrary } from './library';
import { libraryWatchedCheck, libraryQueueCheck } from './libraryCheck';
import { buttonValues } from './modalButtonsValues';

const axios = require('axios').default;

// =============================== MODAL WINDOW ====================================== //
export default function modalWindow() {
  const movieCards = document.querySelectorAll('[data-id]');
  const modalW = document.querySelector('.js-modal');
  const closeBtn = document.querySelector('button[data-action="close-modal"]');
  const overlay = document.querySelector('.modal__overlay');

  // добавляет слушатель клика по карточке фильма
  movieCards.forEach(movie => {
    movie.addEventListener('click', onMovieClick);
  });

  // ===== обработчик клика по карточке фильма =====
  function onMovieClick(event) {
    event.preventDefault();

    const MOVIE_ID = event.currentTarget.dataset.id; // получить ID фильма из data-атрибута карточки фильма (<li data-id="">)

    // проверяем, есть ли такой фильм в библиотеке, чтобы не делать запрос на сервер лишний раз
    // и чтобы правильно отрисовать содержимое кнопок
    const movieWatchedObj = libraryWatchedCheck(MOVIE_ID);
    const movieQueueObj = libraryQueueCheck(MOVIE_ID);

    const objForRendering = movieWatchedObj || movieQueueObj;
    if (objForRendering) {
      const modalContent = document.querySelector('.modal__content');

      modalContent.innerHTML = renderMovieModalCard(objForRendering); // рендерим модалку из полученого из localStorage фильма

      // получить ссылки на кнопки
      const watchedBtn = document.querySelector('[data-category="watched"]');
      const queueBtn = document.querySelector('[data-category="queue"]');

      // устанавливаем значения кнопок
      if (movieWatchedObj) {
        watchedBtn.innerHTML = buttonValues.watchedRemove;
      } else {
        watchedBtn.innerHTML = buttonValues.watchedAdd;
      }

      if (movieQueueObj) {
        queueBtn.innerHTML = buttonValues.queueRemove;
      } else {
        queueBtn.innerHTML = buttonValues.queueAdd;
      }

      // возможность добавлять, удалять фильмы из библиотеки
      myMovieLibrary(objForRendering, MOVIE_ID, watchedBtn, queueBtn);
    } else {
      // функция fetchMovieByID(MOVIE_ID) делает запрос по ID за более детальной информацией о фильме,
      // получает обьект с детальной информацией
      // рендерит разметку и вставляет её в модалку  (вся логика ниже)
      fetchMovieByID(MOVIE_ID);
    }

    // открытие модалки при клике по карточке фильма
    modalOpen();
  }

  // реализация открытия модалки при клике по карточке фильма ===================
  function modalOpen() {
    modalW.classList.add('is-open');
    document.body.classList.add('is-blocked'); // убирает скролл при открытой модалке

    //слушатели для закрытия модалки
    closeBtn.addEventListener('click', modalClose);
    window.addEventListener('keydown', onKeyPress);
    overlay.addEventListener('click', onOverlayClick);
  }

  // реализация закрытия модального окна ==============================================
  function modalClose() {
    const modalContent = document.querySelector('.modal__content');
    modalW.classList.remove('is-open');
    document.body.classList.remove('is-blocked');
    modalContent.innerHTML = '';

    //снимаем слушатели закрытия модалки
    closeBtn.removeEventListener('click', modalClose);
    window.removeEventListener('keydown', onKeyPress);
    overlay.removeEventListener('click', onOverlayClick);
  }

  // обработчик для реализации закрытия модалки при нажатии клавиши ESC
  function onKeyPress(e) {
    if (e.code === 'Escape') {
      modalClose();
    }
  }

  // обработчик для реализации закрытия модалки при клике на overlay
  function onOverlayClick(e) {
    if (e.currentTarget !== e.target) {
      return;
    }
    modalClose();
  }
}

// ========================================= ЗАПРОС =======================================
// эта функция делает запрос по ID за более детальной информацией о фильме
async function fetchMovieByID(id) {
  try {
    const modalContent = document.querySelector('.modal__content');
    const API_KEY = 'ada10aa4e06b3fb240f3edfc31b0fc4e';
    const movieResponse = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`,
    );
    const movie = await movieResponse.data; //получили из бекенда обьект фильма
    const objectMovie = getMovieObject(movie); //вытянули нужные свойства из полученого из бекенда обьекта

    modalContent.innerHTML = renderMovieModalCard(objectMovie); //  рендерим разметку карточки фильма и вставляем в модалку

    // получить ссылки на кнопки
    const watchedBtn = document.querySelector('[data-category="watched"]');
    const queueBtn = document.querySelector('[data-category="queue"]');

    // устанавливаем значения кнопок
    watchedBtn.innerHTML = buttonValues.watchedAdd;
    queueBtn.innerHTML = buttonValues.queueAdd;

    // возможность добавлять и удалять фильмы в свою библиотеку
    myMovieLibrary(objectMovie, id, watchedBtn, queueBtn);
  } catch (error) {
    console.error(error);
  }
}

// ============= вытянуть нужные свойства из полученого из бекенда обьекта ====================
function getMovieObject(movieFromBackend) {
  // из полученного по запросу фильма формируем обьект из его свойств для 2ух целей:
  // 1) из него заполняем шаблон на модалке
  // 2) этот обьект сохраняется в localStorage, если пользователь сохраняет фильм, и
  // потом из него заполняется шаблон карточек фильмов в библиотеке пользователя

  // функция получения жанров фильма из детального запроса (немного отличается от получения жанров для карточек фильмов, так как жанры приходят с названиями уже)
  function movieGenres(film) {
    const genres = [];
    film.genres.map(g => {
      genres.push(g.name);
    });
    return genres.length > 3
      ? genres.splice(2, genres.length - 2, 'Other').join(', ')
      : genres.join(', ');
  }
  //функция, чтобы получить год выпуска фильма из свойства release_data
  function dateRelease(movies) {
    let movieDateRelease = '';
    if (movies.release_date) {
      movieDateRelease = movies.release_date.slice(0, 4);
    }
    return movieDateRelease;
  }

  const objectForRenderingAndSaveInLocalStorage = {
    id: movieFromBackend.id,
    release: dateRelease(movieFromBackend),
    poster: movieFromBackend.poster_path,
    title: movieFromBackend.title,
    vote: movieFromBackend.vote_average,
    votes: movieFromBackend.vote_count,
    popularity: movieFromBackend.popularity,
    name: movieFromBackend.original_title,
    genre: movieGenres(movieFromBackend),
    about: movieFromBackend.overview,
  };
  return objectForRenderingAndSaveInLocalStorage;
}
// =================================== РЕНДЕРИНГ МОДАЛКИ ========================================
// эта функция рендерит разметку карточки фильма в модалке
function renderMovieModalCard(movie_obj) {
  const markup = modalTemplate(movie_obj);
  return markup;
}
