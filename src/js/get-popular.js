import popularTpl from '../templates/movies.hbs';
import FilmsApiService from './api-service';
import refs from './refs';
import loaderToggle from './loader';
import { startPopup } from './popup';

const filmsApiService = new FilmsApiService();
refs.moviesContainer.addEventListener('click', checkClick);

export default function markupPopularMovies(movies) {
  refs.moviesContainer.insertAdjacentHTML('beforeend', popularTpl(movies));
}

function showPopular(url) {
  loaderToggle();
  return filmsApiService
    .showFilmsResult(url)
    .then(markupPopularMovies)
    .then(loaderToggle);
}

showPopular('trending/movie/day');

function checkClick(evt) {
  if (evt.target.tagName === 'IMG') {
    startPopup(evt.target.dataset.id);
  }
}

