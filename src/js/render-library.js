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

//проверяем, есть ли запись в localstorage о последней используемой вкладке, если нет,
//то считаем, что пользователь впервые перешел в библиотеку и устанавливаем последнюю вкладку как watched
if (localStorage.getItem('last-tab') === null)
  localStorage.setItem('last-tab', 'watched');
else setTab(localStorage.getItem('last-tab'));

function setTab(page) {
  if (page === WATCHEDKEY) {
    refs.watchedBtn.classList.add('activBtn');
    refs.queueBtn.classList.remove('activBtn');
  } else {
    refs.queueBtn.classList.add('activBtn');
    refs.watchedBtn.classList.remove('activBtn');
  }
  getCollection(page).then(films => {
    refs.movieList.insertAdjacentHTML('beforeend', popularTpl(films));
  });
}
