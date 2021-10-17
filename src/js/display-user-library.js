import refs from '../js/refs.js';
import {spiner} from './utils/rainbow-spiner.js'

const { dinamicButtons} = refs;

const displayUserLibrary = function () {

  onClickButtonChangeCurrentButton();
    document.getElementById('watched').classList.add('btn-active');
    document.getElementById('queue').classList.add('btn-disable');
    // spiner.show();
//   //default display watched
    getFilmsFromLocalStorage('watched');
    // spiner.hide();
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
function getFilmsFromLocalStorage(typeFilms) {
    if (typeFilms === 'watched') {
        let watched = localStorage.getItem('watched');
        if (watched === null) {
            watched = [];
            console.log('watched', watched);
        } else {
            watched = JSON.parse(watched);
        }
        return watched;
    } else if (typeFilms === 'queue') {
        let queue = localStorage.getItem('queue');
        if (queue === null) {
            queue = [];
            console.log('queue', queue);
        } else {
            queue = JSON.parse(queue);
        }
        return queue;
    }
  }