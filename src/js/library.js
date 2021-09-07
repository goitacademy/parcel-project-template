import getRefs from './get-refs';
import libraryLink from './get-refs';
import createMarkupHeaderLib from '../templates/header-lib.hbs';

getRefs().libraryLink.addEventListener('click', onClickLibRender);

function onClickLibRender(e) {
  e.preventDefault();
  getRefs().container.innerHTML = createMarkupHeaderLib();
}
