import getRefs from './get-refs';
import { apiService } from '../index';
import getPlayerMarkup from '../templates/player.hbs';
import * as basicLightbox from './basicLightbox.min.js';
import showAlert from './show-allert.js';

const refs = getRefs();

export default function showTrailer(e) {
  const id = e.target.dataset.id;
  apiService.getTrailerKeyByMovieId(id).then(key => {
    if (!key) {
      showAlert('Unfortunately, no video found');
      return;
    }
    const modal = basicLightbox.create(getPlayerMarkup(key));
    modal.show();
    document.addEventListener('keydown', evt => {
      if (evt.code === 'Escape') modal.close();
    });
  });
}
