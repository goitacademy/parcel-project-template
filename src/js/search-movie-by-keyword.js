import markupPopularMovies from './get-popular';
import FilmsApiService from './api-service';
import refs from './refs';
import loaderToggle from './loader';

const filmsApiService = new FilmsApiService();

refs.searchForm.addEventListener('submit', onSearch);

function onSearch(e) {
  e.preventDefault();
  filmsApiService.query = e.currentTarget.elements.query.value;

  if (filmsApiService.query !== '') {
    filmsApiService.resetPage();
    clearMarkup();
    fetchCards('search/movie');
  } else {
    clearMarkup();
  }
}

function fetchCards(url) {
  loaderToggle();
  return filmsApiService
    .showFilmsResult(url)
    .then(markupPopularMovies)
    .then(loaderToggle);
}

function clearMarkup() {
  refs.moviesContainer.innerHTML = '';
}
