import { apiService } from '../index';
import { createMarkup } from './createWatchedMarkup';
import deleteFromQueueList from './deleteFromQueueList';
import deleteFromWatchedList from './deleteFromWatchedList';
import renderFilmsCards from '../templates/watchedAndQueueTpl.hbs';

import getRefs from './get-refs';
const refs = getRefs();

export default async function createQueueMarkup() {
  let dataArr = [];
  const queueArr = JSON.parse(localStorage.getItem('Queue'));
  if (queueArr === null) {
    refs.movies.innerHTML = '';
    return;
  } else {
    for (let i = 0; i < queueArr.length; i++) {
      const data = await apiService.getMovieByID(queueArr[i]);
      dataArr.push(data);
    }
    refs.movies.innerHTML = renderFilmsCards(createMarkup(dataArr));
    refs.movies.addEventListener('click', deleteFromQueueList);
  }
  changeActiveQueueBtn();
}

function changeActiveQueueBtn() {
  const watchedBtn = document.getElementById('watched');
  const queueBtn = document.getElementById('queue');

  watchedBtn.classList.replace('button-orange', 'button-white');
  watchedBtn.classList.remove('button-active');

  queueBtn.classList.replace('button-white', 'button-orange');
  queueBtn.classList.add('button-active');
  refs.movies.removeEventListener('click', deleteFromWatchedList);
}
