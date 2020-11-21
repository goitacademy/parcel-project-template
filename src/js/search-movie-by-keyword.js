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
    filmsApiService.resetPage();
    clearMarkup();
    filmsApiService.query = 'nothing';
    fetchCards('search/movie');
  }
}

function fetchCards(url) {
  loaderToggle();
  return filmsApiService.showFilmsResult(url).then(films => {
    loaderToggle();
    markupPopularMovies(films.superResults);
    if (films.superResults.length === 0) {
      refs.notification.classList.add('active');
    }
  });
}

function clearMarkup() {
  refs.moviesContainer.innerHTML = '';
  refs.notification.classList.remove('active');
}
