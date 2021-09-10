import { apiService } from '../index';
import createGalleryMarkup from './create-gallery-markup';
import showAllert from './show-allert';
import getRefs from './get-refs';
const refs = getRefs();

let inputQuery = '';

refs.searchForm.addEventListener('submit', getInputQuery);
// window.addEventListener('keydown', clearInputEsc);
//window.addEventListener('keydown', openEnter)
//refs.body.addEventListener('click', clearInput);

function getInputQuery(event) {
  event.preventDefault();

  inputQuery = event.currentTarget.elements.input.value;
  findMovies(inputQuery);
}

function findMovies(query) {
  window.newPagination.page = 1;
  apiService.findMovies(query).then(createGalleryMarkup).catch(showAllert);
}

// function clearInputEsc(event) {
//   event.preventDefault;
//   const ESC_KEY_CODE = 'Escape';
//   if (event.code === ESC_KEY_CODE) {
//     event.preventDefault;
//     inputQuery = '';
//     document.querySelector('.search-input').value = '';
//   }
// }
