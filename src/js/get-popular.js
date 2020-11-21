import popularTpl from '../templates/movies.hbs';
import FilmsApiService from './api-service';
import refs from './refs';
import loaderToggle from './loader';
import '../js/event/click-on-card';

const filmsApiService = new FilmsApiService();

export default function markupPopularMovies(movies) {
  refs.moviesContainer.insertAdjacentHTML('beforeend', popularTpl(movies));
}

function showPopular(url) {
  loaderToggle();
  return filmsApiService
    .showFilmsResult(url)
    .then(response => markupPopularMovies(response.superResults))
    .then(loaderToggle);
}

showPopular('trending/movie/day');
