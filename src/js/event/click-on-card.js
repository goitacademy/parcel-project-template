import refs from '../refs';
import { startPopup } from '../popup';

refs.moviesContainer.addEventListener('click', checkClick);

function checkClick(evt) {
  if (evt.target.tagName === 'IMG') {
    startPopup(evt.target.dataset.id);
  }
}
