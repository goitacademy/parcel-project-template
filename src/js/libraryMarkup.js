import createMarkupHeaderLib from '../templates/header-lib.hbs';
import createWatchedMarkup from './createWatchedMarkup';
import createQueueMarkup from './createQueueMarkup';
import getRefs from './get-refs';
const refs = getRefs();

export default function libraryMarkup(e) {
  e.preventDefault();
  onClickLibRender();

  const watchedLib = document.getElementById('watched');
  const queueLib = document.getElementById('queue');

  watchedLib.addEventListener('click', createWatchedMarkup);
  queueLib.addEventListener('click', createQueueMarkup);

  createWatchedMarkup();
}

function onClickLibRender() {
  // getRefs().headerJs.innerHTML = createMarkupHeaderLib();
  getRefs().headerLib.classList.replace('.header', '.header-bg-lib');
}
