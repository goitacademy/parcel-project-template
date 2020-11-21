import refs from '../refs';
import getCollection from './get-local-storage';
import popularTpl from '../../templates/movies-items.hbs';
import storageKey from './storage-key';
import notification from './notification';
import fixData from '../fix-data';
import { startPopup } from './popup-library';

const eventID = null;

addBtnEvents(); // устанавливаем слушатели
setLastTab();

//проверяем, есть ли запись в localstorage о последней используемой вкладке, если нет,
//то считаем, что пользователь впервые перешел в библиотеку и устанавливаем последнюю вкладку как watched
export default function setLastTab() {
  if (localStorage.getItem('last-tab') === null)
    localStorage.setItem('last-tab', storageKey.WATCHEDKEY);

  renderPage(localStorage.getItem('last-tab'));
}

async function renderPage(page) {
  refs.moviesContainer.addEventListener('click', checkClick);
  setPage(page);
  const films = await getCollection(page);
  if (films.length < 1) {
    refs.moviesContainer.removeEventListener('click', checkClick);
    notification(page);
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

function addBtnEvents() {
  refs.watchedBtn.addEventListener('click', () => {
    renderPage(storageKey.WATCHEDKEY);
    localStorage.setItem('last-tab', storageKey.WATCHEDKEY);
  });
  refs.queueBtn.addEventListener('click', () => {
    renderPage(storageKey.QUEUEKEY);
    localStorage.setItem('last-tab', storageKey.QUEUEKEY);
  });
}

function checkClick(evt) {
  if (evt.target.tagName === 'IMG') {
    startPopup(evt.target.dataset.id);
  }
}
