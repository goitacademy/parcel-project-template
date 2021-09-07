import getRefs from './get-refs';
import createMarkupHeaderLib from '../templates/header-lib.hbs';

getRefs().library.addEventListener('click', onClickLibRender);

function onClickLibRender(e) {
  e.preventDefault();
  getRefs().headerJs.innerHTML = createMarkupHeaderLib();
}
