import createMarkupHeaderLib from '../templates/header-lib.hbs';
import createWatchedMarkup from './createWatchedMarkup';
import createQueueMarkup from './createQueueMarkup';

import getRefs from './get-refs';
const refs = getRefs();

export default function libraryMarkup(e) {
  e.preventDefault();
  refs.buttonsJs.innerHTML = createMarkupHeaderLib();
  const watchedLib = document.getElementById('watched');
  const queueLib = document.getElementById('queue');

  watchedLib.addEventListener('click', createWatchedMarkup);
  queueLib.addEventListener('click', createQueueMarkup);

  createWatchedMarkup();
  chechHeader();
  changeActiveQueueBtn();
  refs.pagination.classList.add('load-more');
}

function chechHeader() {
  refs.headerCheck.classList.replace('header', 'header-bg-lib');
  if (refs.navHome.classList.contains('site-nav__link--current-page')) {
    refs.navHome.classList.remove('site-nav__link--current-page');
    refs.library.classList.add('site-nav__link--current-page');
  }
}

function changeActiveQueueBtn() {
  const watchedBtn = document.getElementById('watched');
  const queueBtn = document.getElementById('queue');

  queueBtn.classList.replace('button-orange', 'button-white');
  queueBtn.classList.remove('button-active');

  watchedBtn.classList.replace('button-white', 'button-orange');
  watchedBtn.classList.add('button-active');
}
