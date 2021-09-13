import * as basicLightbox from './basicLightbox.min.js';
import renderModalMarkup from '../templates/modalTpl.hbs';
import { apiService } from '../index';
import getRefs from './get-refs';
import showAllert from './show-allert';
const refs = getRefs();
import addToWatched from './addToWatched.js';
import addToQueue from './addToQueue.js';
import checkLocalSt from './chekLocalSt';
import { checkThemeNow, changeTheme } from './themes.js';
import { Theme } from './themes.js';
import changeMarkup from './changeMarkup.js';
import showTrailer from './showTrailer.js';

const modal = basicLightbox.create('<div class="modal js-modal"></div>');

export let idQuery = '';

export default function openModal(e) {
  e.preventDefault();
  document.onkeydown = evt => {
    if (evt.code === 'Escape' && !document.querySelector('.modal__video'))
      modal.close(bodyClassToggle()), changeMarkup();
  };
}

refs.movies.addEventListener('click', getMovieById);

function getMovieById(evt) {
  if (!evt.target.classList.contains('gallery__video')) {
    return;
  }
  idQuery = evt.target.dataset.source;
  fetchMovies(idQuery);
  modal.show();
}

function fetchMovies(id) {
  apiService.getMovieByID(id).then(showMarkup).catch(showAllert);
}

function showMarkup(data) {
  const modalWindow = document.querySelector('.modal');
  if ((modalWindow.innerHTML = renderModalMarkup(data))) {
    bodyClassToggle();
  }

  chechTheme(modalWindow);
  const closeBtn = document.querySelector('.modal__close-btn');
  const watchedBtn = document.querySelector('.watchedBtn-js');
  const queueBtn = document.querySelector('.queueBtn-js');
  const videoBtnRef = document.querySelector('.video-js');
  
  videoBtnRef.onclick = showTrailer;
  closeBtn.addEventListener(
    'click',
    (modalWindow.openModal = () => modal.close(modal.close(bodyClassToggle()), changeMarkup())),
  );
  watchedBtn.addEventListener('click', addToWatched);
  queueBtn.addEventListener('click', addToQueue);
  checkLocalSt(queueBtn, watchedBtn);
}

function chechTheme(modalWindow) {
  if (refs.containerEl.classList.contains(Theme.DARK)) {
    modalWindow.classList.add(Theme.DARK);
  } else {
    modalWindow.classList.replace(Theme.DARK, Theme.LIGHT);
  }
}

function bodyClassToggle() {
  const modalOpen = document.querySelector('.basicLightbox');
  modalOpen.addEventListener('click', onBackdropClick);
  refs.bodyRef.classList.toggle('hidden');
}

function onBackdropClick(e) {
  if (e.target !== e.currentTarget) {
    return;
  }
  refs.bodyRef.classList.toggle('hidden');
  changeMarkup();
}

export { fetchMovies, modal };
