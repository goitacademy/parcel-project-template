import * as basicLightbox from './basicLightbox.min.js';
import renderModalMarkup from '../templates/modalTpl.hbs';
import gallery from '../templates/gallery.hbs';
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

const modal = basicLightbox.create('<div class="modal js-modal"></div>');

export let idQuery = '';

export default function openModal(e) {
  e.preventDefault();
  document.onkeydown = evt => {
    if (evt.code === 'Escape') modal.close(), changeMarkup();
  };
}

function getMovieById(evt) {
  if (!evt.target.classList.contains('gallery__video')) {
    return;
  }
  idQuery = evt.target.dataset.source;
  console.log(idQuery);
  fetchMovies(idQuery);
  modal.show();
} 

function fetchMovies(id) {
  apiService.getMovieByID(id).then(showMarkup).catch(showAllert);
}

function showMarkup(data) {
  const modalWindow = document.querySelector('.modal');
  modalWindow.innerHTML = renderModalMarkup(data);
  if(refs.containerEl.classList.contains(Theme.DARK)) {
    modalWindow.classList.add(Theme.DARK);
  }
  else {
    modalWindow.classList.replace(Theme.DARK, Theme.LIGHT);
    }
  const closeBtn = document.querySelector('.modal__close-btn');
  const watchedBtn = document.querySelector('.watchedBtn-js');
  const queueBtn = document.querySelector('.queueBtn-js');
  closeBtn.addEventListener('click', (modalWindow.openModal = () => {
    modal.close();
    changeMarkup();
  }));
  watchedBtn.addEventListener('click', addToWatched);
  queueBtn.addEventListener('click', addToQueue);
  checkLocalSt(idQuery, queueBtn, watchedBtn);
}

refs.movies.addEventListener('click', getMovieById);
