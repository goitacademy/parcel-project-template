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
}

function chechHeader() {
  refs.headerCheck.classList.replace('header', 'header-bg-lib');
  if (refs.navHome.classList.contains('site-nav__link--current-page')) {
    refs.navHome.classList.remove('site-nav__link--current-page');
    refs.library.classList.add('site-nav__link--current-page');
  }
}
