import { apiService } from '../index';
import createGalleryMarkup from './create-gallery-markup';
import showAllert from './show-allert';
import getRefs from './get-refs';
const refs = getRefs();

let inputQuery = '';

refs.searchForm.addEventListener('submit', getInputQuery);

function getInputQuery(event) {
  event.preventDefault();

  inputQuery = event.currentTarget.elements.input.value;
  findMovies(inputQuery);
}

function findMovies(query) {
  apiService.page = 1;
  apiService.findMovies(query).then(createGalleryMarkup).catch(showAllert);
}
