import * as basicLightbox from 'basiclightbox';
import { getInfoMovie, getVideos } from './api';
import refs from './refs';
import { onAddToWatched, onAddToQueue } from './add-to-watched&queue';
import {
  watched,
  queue,
  setQueueLocalStoradge,
  setWatchedLocalStoradge,
} from './local-storage';
import noposter from '../images/noposter.jpg';
import { showHideLoader } from './loader';
import { getArrayofMovies } from './api';
import { createLibraryMarkup } from './create-library-markup';
import youtube from '../images/youtube.svg';

let keyTrailer = '';

export function loadIntoModal(id) {
  showHideLoader(refs.loaderModal);
  const film = getInfoMovie(id).then(data => {
    showHideLoader(refs.loaderModal);
    getVideos(id)
      .then(movies => {
        if (movies && movies.length) {
          const objTrailer = movies.find(movie => movie.type === 'Trailer');

          if (objTrailer && objTrailer.type !== 'Trailer') {
            return;
          }
          keyTrailer = objTrailer ? objTrailer.key : '';
        }

        refresh(data, id, keyTrailer);
        keyTrailer = '';
      })
      .catch(error => {
        refresh(data, id);
      });
  });
}

function refresh(data, id, keyTrailer = '') {
  if (!createFilmCardMarkup(data)) {
    return;
  }

  const addWatchedRef = document.querySelector('[data-btn=addToWatched]');
  const addQueueRef = document.querySelector('[data-btn=addToQueue]');

  if (watched.includes(id)) {
    addWatchedRef.textContent = 'Is in watched';
    addWatchedRef.style.backgroundColor = '#ff6b01';
    addWatchedRef.style.color = '#ffffff';
  }
  if (queue.includes(id)) {
    addQueueRef.textContent = 'Is in queue';
    addQueueRef.style.backgroundColor = '#ff6b01';
    addQueueRef.style.color = '#ffffff';
  }

  addWatchedRef.addEventListener('click', () => {
    if (watched.includes(id)) {
      watched.splice(watched.indexOf(id), 1);
      setWatchedLocalStoradge(watched);
      addWatchedRef.style.backgroundColor = '#ffffff';

      getArrayofMovies(watched)
        .then(data => {
          if (refs.library) {
            refs.library.innerHTML = createLibraryMarkup(data);
          }
        })
        .catch(er => console.log(er));
    } else {
      onAddToWatched(id);
      setWatchedLocalStoradge(watched);
    }

    refs.modalRef.innerHTML = '';
    refresh(data, id, keyTrailer);
  });

  addQueueRef.addEventListener('click', () => {
    if (queue.includes(id)) {
      queue.splice(queue.indexOf(id), 1);
      setQueueLocalStoradge(queue);
      addQueueRef.style.backgroundColor = '#ffffff';

      getArrayofMovies(queue).then(data => {
        if (refs.library) {
          refs.library.innerHTML = createLibraryMarkup(data);
        }
      });
    } else {
      onAddToQueue(id);
      setQueueLocalStoradge(queue);
    }

    refs.modalRef.innerHTML = '';
    refresh(data, id, keyTrailer);
  });
  const trailerRef = document.querySelector('[data-btn=watchTrailer]');
  if (!keyTrailer) {
    trailerRef.classList.add('is-hidden');
    // trailerRef.setAttribute('hidden', 'true');
  }

  trailerRef.onclick = () => {
    basicLightbox
      .create(
        `<iframe width="640" height="360"
        src="https://www.youtube.com/embed/${keyTrailer}"
        title="" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
      )
      .show();
  };
}

function createFilmCardMarkup(data) {
  let status = true;
  if (!data) {
    refs.modalRef.innerHTML =
      '<div class="modal__empty">Ups, info is unavailable</div>';
    status = false;
    return;
  }

  const poster = data.poster_path
    ? `https://image.tmdb.org/t/p/w500${data.poster_path}`
    : noposter;

  const markup = `<img
      class="modal__img"
      src="${poster}"
      alt=""
      width="240"
      height="357"
    />
    <div>
      <h2 class="modal__title">${data.title}</h2>
      <div class="modal__list-box">
        <ul class="modal__list list">
          <li class="modal__list-item">
            <p class="modal__list-rigth">Vote/Votes </p>
          </li>
          <li class="modal__list-item">
            <p class="modal__list-rigth">Popularity</p>
          </li>
          <li class="modal__list-item">
            <p class="modal__list-rigth">Original Title</p>
          </li>
          <li class="modal__list-item">
            <p class="modal__list-rigth">Genre</p>
          </li>
        </ul>
        <ul class="modal__list list">
          <li class="modal__list-item modal__left">
            <p class="modal__list-left">
    <span class="modal__list-vote">${data.vote_average.toFixed(1)}</span>
                <span class="modal__list-slesh">/</span>
                <span class="modal__list-votes">${data.vote_count}</span>
    </p>
          </li>
          <li class="modal__list-item modal__left">

            <p class="modal__list-left">${
              data.popularity.toFixed(1) ?? '-'
            } </p>

          </li>
          <li class="modal__list-item modal__left">
            <p class="modal__list-left">${data.title}</p>
          </li>
          <li class="modal__list-item modal__left">
            <p class="modal__list-left">${getGenres(data.genres)}</p>
          </li>
        </ul>
      </div>
      <h3 class="modal__subtitle">ABOUT</h3>
      <p class="modal__descrpt">
       ${data.overview ?? '---'}
      </p>
       
      <ul class="modal__btn-list list">
        <li>
          <button type="button" class="modal__btn" data-btn="addToWatched">
            add to Watched
          </button>
        </li>
        <li>
          <button type="button" class="modal__btn" data-btn="addToQueue">
            add to queue
          </button>
        </li>
      </ul>

      <div class="modal__trailer">
        <button
          type="button"
          class="modal__btn modal__btn-trailer"
          data-btn="watchTrailer"
        >
          <img class="modal__icon-youtube" src="${youtube}" alt="youtube" />
          Watch Trailer
        </button>
      </div>
    </div>`;

  refs.modalRef.innerHTML = markup;
  refs.teamRef.innerHTML = '';
  const voteRef = document.querySelector('.modal__list-vote');

  if (data.vote_average < 6) {
    voteRef.style.backgroundColor = '#ffffff';
    voteRef.style.color = '#000000';
  }

  return status;
}

function getGenres(arrOfGenres) {
  return arrOfGenres.map(genr => genr.name).join(', ');
}
