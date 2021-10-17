import refs from '../js/refs.js';
import apiService from './utils/api-service.js'
import { drawCards, scrollToTop } from './components/gallery-adapter';
import gellary from '..//templates/one-movie-card.hbs'

const { dinamicButtons, list:library, libraryLink, homeLink} = refs;

const displayUserLibrary = function () {

  onClickButtonChangeCurrentButton();
    document.getElementById('watched').classList.add('btn-active');
    document.getElementById('queue').classList.add('btn-disable');
//   //---------there will be spiner start
//   //default display watched
    getFilmsFromLocalStorage('watched');
//   //---------there will be spiner stop
};

displayUserLibrary();

//function to display current button in myLibrary
function onClickButtonChangeCurrentButton() {
  dinamicButtons.addEventListener('click', e => {
    const watchedButton = document.getElementById('watched');
    const queueButton = document.getElementById('queue');
    if (e.target.textContent === 'WATCHED') {
        queueButton.classList.remove('btn-active');
        queueButton.classList.add('btn-disable');
        watchedButton.classList.remove('btn-disable');
        watchedButton.classList.add('btn-active');
        getFilmsFromLocalStorage('watched');
    } else if (e.target.textContent === 'QUEUE') {
        watchedButton.classList.remove('btn-active');
        watchedButton.classList.add('btn-disable');
        queueButton.classList.remove('btn-disable');
        queueButton.classList.add('btn-active');
        getFilmsFromLocalStorage('queue');
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
    type ='watched';
renderList(type);
  }
  if  (e.target.id === 'queue'){
 type = 'queue';
 renderList(type);
    }  
});
}
// homeLink.addEventListener('click', ((e) => console.log(e.target)));
libraryLink.addEventListener('click', render);
function renderList(e) {
    library.innerHTML = ' ';
    const array = getFilmsFromLocalStorage(e);
    apiService.fetchMoviesByIds(array).then(data => {
        const card = gellary(data);
library.innerHTML = card;
    })
}
