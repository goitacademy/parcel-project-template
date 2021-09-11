import './sass/main.scss';

import getRefs from './js/get-refs';
const refs = getRefs();

const API_KEY = '0e03d2359202713e59ab7c25960ab620';
import ApiService from './js/api-service.js';
export const apiService = new ApiService(API_KEY);

import createGalleryMarkup from './js/create-gallery-markup.js';

import showAllert from './js/show-allert.js';
import './js/team-modal.js';
import './js/loader.js';
import openModal from './js/modal';
import addToWatched from './js/addToWatched';
import theme from './js/themes.js';
import genres from './genres.json'; //массив жанров (объектов вида: { "id": 28, "name": "Action" })
import inputSearch from './js/inputSearch';
import libraryMarkup from './js/libraryMarkup';
import createWatchedMarkup from './js/createWatchedMarkup';
import Pagination from './js/pagination.js';
import createSliderMarkup from './js/createSliderMarkup';

// apiService.getTopMovies().then(createSliderMarkup).catch(console.log);
apiService.getTrendingMovies().then(createGalleryMarkup).catch(console.log);

const newPagination = new Pagination(apiService);
window.newPagination = newPagination;

refs.movies.addEventListener('click', openModal);
refs.library.addEventListener('click', libraryMarkup);
