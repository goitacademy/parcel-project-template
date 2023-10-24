import { Notify } from 'notiflix/build/notiflix-notify-aio';

import TheMovieDbApi from './themoviedb-api';
import { clearGallery } from './clearGallery';
import { handleResponse } from './galleryBuilder';

const form = document.querySelector('.search-form');

const api = new TheMovieDbApi();

form.addEventListener('submit', onSearchFormSubmit);

function onSearchFormSubmit(event) {
  event.preventDefault();

  const queryString = event.currentTarget.elements.searchText.value.trim();

  if (!queryString) {
    // Afișează notificare pentru a specifica că trebuie să introduci un nume
    Notify.failure('You must enter a movie name.');
    return;
  }

  api
    .getMoviesByName(queryString)
    .then(res => {
      console.log(res);
      if (res.results.length < 1) {
        Notify.failure(
          'Search result not successful. Enter the correct movie name.'
        );
      } else {
        Notify.success('Results found successfully.');
        clearGallery(); // Șterge galeria înainte de a afișa rezultatele căutării
        handleResponse(res, true); // Afișează rezultatele căutării în galerie
      }
    })
    .catch(err => {
      Notify.failure('A apărut o eroare în timpul căutării.');
    })
    .finally(() => form.reset());
}
