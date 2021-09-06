import libMarkup from '../templates/header-lib.hbs';
import createWatchedMarkup from './createWatchedMarkup';
import createQueueMarkup from './createQueueMarkup';
import getRefs from './get-refs';
const refs = getRefs();

export default function libraryMarkup(e) {
  e.preventDefault();
  refs.buttonsJs.innerHTML = libMarkup();

  const watchedLib = document.getElementById('watched');
  const queueLib = document.getElementById('queue');

  watchedLib.addEventListener('click', createWatchedMarkup);
  queueLib.addEventListener('click', createQueueMarkup);
}
