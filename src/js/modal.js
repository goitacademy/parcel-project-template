import getFilms from './fetch-popular';
import modalFilm from '../templates/modal.hbs';
// import { URL } from '../js/popular.js';
import genres from '../js/genres.json';

const cards = document.querySelector('.film-card__list');
const cardsArray = document.querySelectorAll('.film-card__item');
const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const body = document.querySelector('body');

// Работа с модальным окном - открытие и закрытие
cards.addEventListener('click', onModalOpen);

function onModalOpen(evt) {
  evt.preventDefault();

  if (evt.target.nodeName !== 'IMG') {
    return;
  }

  onGetFilms(evt);

  backdrop.classList.remove('is-hidden');
  modal.classList.remove('is-hidden');
  body.classList.add('modal-open');

  backdrop.addEventListener('click', evt => {
    if (!evt.target.classList.contains('backdrop')) {
      return;
    }
    onModalClose(evt);
  });

  window.addEventListener('keydown', evt => {
    console.log(evt.code);
    if (evt.code === 'Escape') {
      onModalClose(evt);
    }
  });
}

function onGetFilms(evt) {
  getFilms()
    .then(data => {
      return data.results;
    })
    .then(films => {
      const openedFilm = films.find(film => film.title === evt.target.alt);

      console.log(openedFilm);

      onModalMakeCard(openedFilm);
      return;
    })
    .catch(error => console.log('ошибка!!!  что-то не так с запросом'));
}

function onModalMakeCard(openedFilm) {
  const filteredGenres = genres.filter(genre => {
    return openedFilm.genre_ids.includes(genre.id);
  });

  const nedenGenres = filteredGenres.map(genre => genre.name).join(', ');

  openedFilm.genre_ids = nedenGenres;
  openedFilm.poster_path = URL + openedFilm.poster_path;
  const modalCard = modalFilm(openedFilm);

  modal.insertAdjacentHTML('afterbegin', modalCard);

  const btnWached = document.querySelector('.watched');

  const btnModalClose = document.querySelector('.button-close');
  btnModalClose.addEventListener('click', onModalClose);

  btnWached.addEventListener('click', () => {
    console.log('слушатель событий на Вотчт');
  });
}

function onWached() {
  console.log('составляю базу просмотренных фильмов');
}

function onModalClose(evt) {
  // console.log(evt.code);
  // console.log(evt.target);
  // console.log(evt.currentTarget);
  // console.log(evt.target.classList.contains('backdrop'));

  backdrop.classList.add('is-hidden');
  modal.classList.add('is-hidden');
  body.classList.remove('modal-open');

  modal.innerHTML = '';
}

// Заполение модального окна нужным контентом
