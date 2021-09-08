import createMarkupHeaderLib from '../templates/header-lib.hbs';
import createWatchedMarkup from './createWatchedMarkup';
import createQueueMarkup from './createQueueMarkup';
import { checkThemeNow, changeTheme } from './themes';
import getRefs from './get-refs';
const refs = getRefs();

export default function libraryMarkup(e) {
  e.preventDefault();
  refs.headerJs.innerHTML = createMarkupHeaderLib();
  const watchedLib = document.getElementById('watched');
  const queueLib = document.getElementById('queue');

  watchedLib.addEventListener('click', createWatchedMarkup);
  queueLib.addEventListener('click', createQueueMarkup);

  createWatchedMarkup();
}
