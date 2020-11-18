import FilmsApiService from './api-service';
import getCollection from './get-local-storage';
import popularTpl from '../templates/movies.hbs';

const WATCHEDKEY = 'watched';
const QUEUEKEY = 'queue';

const refs = {
  movieList: document.querySelector('.movies-list'),
  watchedBtn: document.querySelector('.watched-btn'),
  queueBtn: document.querySelector('.queue-btn'),
};

addEvents(); // устанавливаем слушатели

//проверяем, есть ли запись в localstorage о последней используемой вкладке, если нет,
//то считаем, что пользователь впервые перешел в библиотеку и устанавливаем последнюю вкладку как watched
if (localStorage.getItem('last-tab') === null)
  localStorage.setItem('last-tab', 'watched');
else setTab(localStorage.getItem('last-tab'));

function setTab(page) {
  if (page === WATCHEDKEY) {
    refs.watchedBtn.classList.add('activBtn');
    refs.queueBtn.classList.remove('activBtn');
  }
  if (page === QUEUEKEY) {
    refs.queueBtn.classList.add('activBtn');
    refs.watchedBtn.classList.remove('activBtn');
  }
  getCollection(page).then(films => {
    console.log(films.length);
    if (films.length < 1) {
      infoMsg();
      return;
    }
    refs.movieList.innerHTML = popularTpl(films);
  });
}

function addEvents() {
  refs.watchedBtn.addEventListener('click', () => {
    setTab(WATCHEDKEY);
    localStorage.setItem('last-tab', WATCHEDKEY);
  });
  refs.queueBtn.addEventListener('click', () => {
    setTab(QUEUEKEY);
    localStorage.setItem('last-tab', QUEUEKEY);
  });
}

function infoMsg() {
  refs.movieList.innerHTML =
    '<li class="info-msg">Вы еще не добавили фильмы в свою библиотеку.</li>';
}
