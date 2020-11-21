import FilmsApiService from '../api-service';
import refs from '../refs';
import getCollection from './get-local-storage';
import popularTpl from '../../templates/movies.hbs';
import storageKey from './storage-key';
import notification from './notification';
import '../event/click-on-card';
import fixData from '../fix-data';

addEvents(); // устанавливаем слушатели

//проверяем, есть ли запись в localstorage о последней используемой вкладке, если нет,
//то считаем, что пользователь впервые перешел в библиотеку и устанавливаем последнюю вкладку как watched
if (localStorage.getItem('last-tab') === null)
  localStorage.setItem('last-tab', storageKey.WATCHEDKEY);
else renderPage(localStorage.getItem('last-tab'));

async function renderPage(page) {
  setPage(page);
  const films = await getCollection(page);
  if (films.length < 1) {
    notification();
    return;
  }

  const fixDataFilms = fixData(films);

  refs.moviesContainer.innerHTML = popularTpl(fixDataFilms);
}

function setPage(page) {
  if (page === storageKey.WATCHEDKEY) {
    refs.watchedBtn.classList.add('activBtn');
    refs.queueBtn.classList.remove('activBtn');
  }
  if (page === storageKey.QUEUEKEY) {
    refs.queueBtn.classList.add('activBtn');
    refs.watchedBtn.classList.remove('activBtn');
  }
}

function addEvents() {
  refs.watchedBtn.addEventListener('click', () => {
    renderPage(storageKey.WATCHEDKEY);
    localStorage.setItem('last-tab', storageKey.WATCHEDKEY);
  });
  refs.queueBtn.addEventListener('click', () => {
    renderPage(storageKey.QUEUEKEY);
    localStorage.setItem('last-tab', storageKey.QUEUEKEY);
  });
