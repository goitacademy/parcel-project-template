import refs from '../js/refs.js';
import {spiner} from './utils/rainbow-spiner.js'

import apiService from './utils/api-service.js'

import galleryLib from '..//templates/one-movie-card-lib.hbs'

const { queueButton, watchedButton, dinamicButtons, list:library, libraryLink, homeLink} = refs;

const arrayLsWatched = 'watched';
const arrayLsQueue = 'queue';

const displayUserLibrary = function () {
  //default display watched
  watchedButton.classList.add('btn-active');
  queueButton.classList.add('btn-disable');
  getFilmsFromLocalStorage('watched');
  onClickButtonChangeCurrentButton();
};

displayUserLibrary();

//function to display current button in myLibrary
function onClickButtonChangeCurrentButton() {
  dinamicButtons.addEventListener('click', e => {
    if (e.target.textContent === 'WATCHED') {
        queueButton.classList.replace('btn-active', 'btn-disable');
        watchedButton.classList.replace('btn-disable', 'btn-active');
        
        getFilmsFromLocalStorage('watched');
        render(arrayLsWatched);
    } else if (e.target.textContent === 'QUEUE') {
        watchedButton.classList.replace('btn-active', 'btn-disable');
        queueButton.classList.replace('btn-disable', 'btn-active');

        getFilmsFromLocalStorage('queue');
        render(arrayLsQueue);
    }
  });
}

//funtction to det list of films from LocalStorage with parametr watched/queue
export function getFilmsFromLocalStorage(typeFilms) {
  if (typeFilms === 'watched') {
    let watched = localStorage.getItem('watched');
    if (watched === null) {
      watched = [];
    } else {
      watched = JSON.parse(watched);
    }
    return watched;
  } else if (typeFilms === 'queue') {
    let queue = localStorage.getItem('queue');
    if (queue === null) {
      queue = [];
    } else {
      queue = JSON.parse(queue);
    }
    return queue;
  }
}

function render(e) {
    renderList('watched');
dinamicButtons.addEventListener('click', e => {
  let type = 'watched';
  if  (e.target.id === 'watched'){
    type = 'watched';
    renderList(type);
  }
  if  (e.target.id === 'queue'){
    type = 'queue';
    renderList(type);
  }
  
});
}

libraryLink.addEventListener('click', render);

function renderList(e) {
  library.innerHTML = ' ';

  const array = getFilmsFromLocalStorage(e);
  apiService.fetchMoviesByIds(array).then(data => {
      const card = galleryLib(data);
      library.innerHTML = card;
    })
}
