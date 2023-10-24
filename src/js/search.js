import TheMovieDbApi from './themoviedb-api.js';

const form = document.querySelector('.search-form');
const noResultsError = document.querySelector('.no-results-error');

const api = new TheMovieDbApi();

form.addEventListener('submit', onSearchFormSubmit);

function onSearchFormSubmit(event) {
  event.preventDefault();
  HideTextError(noResultsError);

  const queryString = event.currentTarget.elements.searchText.value.trim();

  api
    .getMoviesByName(queryString)
    .then(res => {
      console.log(res);
      if (res.results.length < 1) {
        ShowTextError(noResultsError);
      } else {
        HideTextError(noResultsError);
      }
    })
    .catch(err => {
      console.log(err);
    })
    .finally(() => form.reset());
}

function HideTextError(error) {
  error.classList.remove('shown');
  error.classList.add('hidden');
}

function ShowTextError(error) {
  error.classList.remove('hidden');
  error.classList.add('shown');
}
