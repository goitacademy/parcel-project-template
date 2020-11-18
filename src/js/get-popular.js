import popularTpl from '../templates/movies.hbs';
import FilmsApiService from './api-service';
import refs from './refs';
import { startPopup } from './popup';

const filmsApiService = new FilmsApiService();

function markupPopularMovies(movies) {
  refs.moviesContainer.insertAdjacentHTML('beforeend', popularTpl(movies));
}

function showPopular(url) {
  return filmsApiService.showFilmsResult(url).then(markupPopularMovies);
}

showPopular('trending/movie/day');

refs.moviesContainer.addEventListener("click", checkClick);

function checkClick(evt) {
  if (evt.target.tagName === "IMG") {
    startPopup(evt.target.dataset.id);
  }
}
