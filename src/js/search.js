import TheMovieDbApi from './themoviedb-api';
import { clearGallery } from './clearGallery';
import { handleResponse } from './galleryBuilder';

const ITEMS_PER_PAGE = 20;

const form = document.querySelector('.search-form');
const input = document.querySelector('.search-form-input');
const emptySearchError = document.querySelector('.empty-search-error');
const noResultsError = document.querySelector('.no-results-error');

const api = new TheMovieDbApi();

form.addEventListener('submit', onSearchFormSubmit);

function onSearchFormSubmit(event) {
  event.preventDefault();
  HideTextError(emptySearchError);
  HideTextError(noResultsError);

  const queryString = event.currentTarget.elements.searchText.value.trim();

  if (!queryString) {
    ShowTextError(emptySearchError);
    form.reset();
    return;
  } else {
    HideTextError(emptySearchError);
  }

  fetchSearchedMovies(queryString)
    .then(res => {
      console.log(res);
      if (res.results.length < 1) {
        ShowTextError(noResultsError);
      } else {
        HideTextError(noResultsError);
        clearGallery(); // Șterge galeria înainte de a afișa rezultatele căutării
        handleResponse(res, true); // Afișează rezultatele căutării în galerie
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

async function fetchSearchedMovies(name) {
  return await api.getMoviesByName(name);
}
