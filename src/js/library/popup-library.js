import popupMovieTpl from '../../templates/popup-movie.hbs';
import FilmsApiService from '../api-service.js';
import refs from '../refs';
import { onModalButtons, clearListener } from '../lists-add-servises';
import loaderToggle from '../loader';
import { setLastTab } from './render-library';

const filmsApiService = new FilmsApiService();

export function startPopup(id) {
  loaderToggle();
  filmsApiService
    .singleRequest(id)
    .then(renderPage)
    .then(loaderToggle)
    .catch(error => console.log(error));

  refs.body.classList.add('popup-open');
  refs.popup.classList.add('is-open');
  refs.popup.addEventListener('click', onBackdropClick);
  refs.btnClose.addEventListener('click', closePopup);
  window.addEventListener('keyup', closePopup);
}

function renderPage(film) {
  const markup = popupMovieTpl(film);
  refs.movieField.innerHTML = markup;
  checkMarkup();
  onModalButtons();
}

function closePopup({ type, key }) {
  const clearPopup = () => {
    refs.body.classList.remove('popup-open');
    refs.popup.classList.remove('is-open');
    refs.popup.removeEventListener('click', closePopup);
    refs.btnClose.removeEventListener('click', closePopup);
    window.removeEventListener('keyup', closePopup);
    refs.movieField.innerHTML = '';
    clearListener();
    setLastTab();
  };

  if (type === 'keyup') {
    if (key === 'Escape') {
      clearPopup();
    }
  } else {
    clearPopup();
  }
}

function onBackdropClick(event) {
  if (event.currentTarget === event.target) {
    closePopup(event);
  }
}

function checkMarkup() {
  const avVote = document.querySelector('.vote-average');
  const avVoteValue = avVote.textContent;

  if (!avVoteValue.includes('.')) {
    avVote.textContent = avVoteValue.concat('.0');
  }
}
