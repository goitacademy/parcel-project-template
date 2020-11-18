import popularTpl from '../templates/movies.hbs';
import FilmsApiService from './api-service';
import refs from './refs';

const filmsApiService = new FilmsApiService();

function markupPopularMovies(movies) {
  refs.moviesContainer.insertAdjacentHTML('beforeend', popularTpl(movies));
}

function showPopular(url) {
  return filmsApiService.showFilmsResult(url).then(markupPopularMovies);
}

showPopular('trending/movie/day');
