import modalTemplate from '../templates/modal-card.hbs';
const axios = require('axios').default;

// главная функция для модалки ================================================================================== //
export default function modalWindow() {
  const movieCards = document.querySelectorAll('[data-id]');
  const modalW = document.querySelector('.js-modal');
  const closeBtn = document.querySelector('button[data-action="close-modal"]');
  const overlay = document.querySelector('.modal__overlay');

  // добавляет слушатель клика по карточке фильма
  movieCards.forEach(movie => {
    movie.addEventListener('click', onMovieClick);
  });

  // обработчик клика по карточке фильма
  function onMovieClick(event) {
    event.preventDefault();

    const MOVIE_ID = event.currentTarget.dataset.id; // получить ID фильма из data-атрибута карточки фильма (<li data-id="">)

    // функция fetchMovieByID(MOVIE_ID) делает запрос по ID за более детальной информацией о фильме,
    // получает обьект с детальной информацией
    // рендерит разметку и вставляет её в модалку  (вся логика ниже)
    fetchMovieByID(MOVIE_ID);

    // открытие модалки при клике по карточке фильма
    modalOpen();

    // возможность добавлять и удалять фильмы в свою библиотеку
    myMovieLibrary();
  }

  // ====================================================================
  // реализация функции открытия модалки при клике по карточке фильма
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

// ================================================================================
// эта функция делает запрос по ID за более детальной информацией о фильме
async function fetchMovieByID(id) {
  try {
    const modalContent = document.querySelector('.modal__content');
    const API_KEY = 'ada10aa4e06b3fb240f3edfc31b0fc4e';
    const movieResponse = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`,
    );
    const movie = await movieResponse.data;

    modalContent.innerHTML = renderMovieModalCard(movie); //  рендерим разметку карточки фильма и вставляем в модалку
  } catch (error) {
    console.error(error);
  }
}

// =================================================================================
// эта функция рендерит разметку карточки фильма в модалке
function renderMovieModalCard(movie_obj) {
  // функция получения жанров фильма из детального запроса (немного отличается от получения жанров для карточек фильмов, так как жанры приходят с названиями уже)
  function movieGenres(film) {
    const genres = [];
    film.genres.map(g => {
      genres.push(g.name);
    });
    return genres.length > 3
      ? genres.splice(2, genres.length - 2, 'Other').join(' ')
      : genres.join(' ');
  }
  //функция, чтобы получить год выпуска фильма из свойства release_data
  function dateRelease(movies) {
    let movieDateRelease = '';
    if (movies.release_date) {
      movieDateRelease = movies.release_date.slice(0, 4);
    }
    return movieDateRelease;
  }

  // из полученного по запросу фильма формируем обьект из его свойств для 2ух целей:
  // 1) из него заполняем шаблон на модалке
  // 2) этот обьект сохраняется в localStorage, если пользователь сохраняет фильм, и
  // потом из него заполняется шаблон карточек фильмов в библиотеке пользователя
  const objectForRendering = {
    id: movie_obj.id,
    release_date: dateRelease(movie_obj),
    poster: movie_obj.poster_path,
    title: movie_obj.title,
    vote: movie_obj.vote_average,
    votes: movie_obj.vote_count,
    popularity: movie_obj.popularity,
    original_title: movie_obj.original_title,
    genres: movieGenres(movie_obj),
    about: movie_obj.overview,
  };
  const markup = modalTemplate(objectForRendering);
  return markup;
}

// ======================================== LIBRARY ===========================================
// главная функция библиотеки, дает возможность добавлять и удалять фильмы в свою библиотеку
function myMovieLibrary() {
  //получить ссылки на кнопки
}
