import modalTemplate from '../templates/modal-card.hbs';
const axios = require('axios').default;

// главная функция для модалки
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
    fetchMovieByID(MOVIE_ID); // делаем запрос по ID за более детальной информацией о фильме

    // открытие модалки при клике по элементу галереи
    modalOpen();
  }

  // реализация функции открытия модалки при клике по карточке фильма
  function modalOpen() {
    modalW.classList.add('is-open');
    document.body.classList.add('is-blocked'); // убирает скролл при открытой модалке

    //слушатели для закрытия модалки
    closeBtn.addEventListener('click', modalClose);
    window.addEventListener('keydown', onKeyPress);
    overlay.addEventListener('click', onOverlayClick);
  }

  // реализация закрытия модального окна
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
  // и пролистывания изображений галереи в открытом модальном окне клавишами "влево" и "вправо".
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

// эта функция делает запрос по ID за более детальной информацией о фильме
async function fetchMovieByID(id) {
  try {
    const modalContent = document.querySelector('.modal__content');
    const API_KEY = 'ada10aa4e06b3fb240f3edfc31b0fc4e';
    const movieResponse = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`,
    );
    const movie = await movieResponse.data;

    modalContent.innerHTML = renderMovieModalCard(movie); //  рендерим разметку карточки фильма в модалке и вставляем в модалку
  } catch (error) {
    console.error(error);
  }
}

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
  const output_object = {
    poster: movie_obj.poster_path,
    title: movie_obj.title,
    vote: movie_obj.vote_average,
    votes: movie_obj.vote_count,
    popularity: movie_obj.popularity,
    original_title: movie_obj.original_title,
    genres: movieGenres(movie_obj),
    about: movie_obj.overview,
  };
  const markup = modalTemplate(output_object);
  return markup;
}
