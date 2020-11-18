import popularTpl from '../templates/movies.hbs';
import FilmsApiService from './api-service';
import refs from './refs';
import { startPopup } from './popup';
import loaderToggle from './loader'

const filmsApiService = new FilmsApiService();

function markupPopularMovies(movies) {
  refs.moviesContainer.insertAdjacentHTML('beforeend', popularTpl(movies));
}

function showPopular(url) {
  loaderToggle();
  return filmsApiService.showFilmsResult(url).then(markupPopularMovies).then(loaderToggle);
}

showPopular('trending/movie/day');

refs.moviesContainer.addEventListener("click", checkClick);

function checkClick(evt) {
  if (evt.target.tagName === "IMG") {
    startPopup(evt.target.dataset.id);
  }
}
