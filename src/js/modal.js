import * as basicLightbox from './basicLightbox.min.js';
import renderModalMarkup from '../templates/modalTpl.hbs';
import addToWatched from './addToWatched.js';
import addToQueue from './addToQueue.js';

export default function openModal(e) {
  e.preventDefault();
  const modal = basicLightbox.create(renderModalMarkup());
  modal.show();
  const modalWindow = document.querySelector('.modal');
  const closeBtn = document.querySelector('.modal__close-btn');
  const watchedBtn = document.querySelector('.watchedBtn-js');
  const queueBtn = document.querySelector('.queueBtn-js');

  watchedBtn.addEventListener('click', addToWatched);
  queueBtn.addEventListener('click', addToQueue);

  document.onkeydown = evt => {
    if (evt.code === 'Escape') modal.close();
  };

  closeBtn.addEventListener('click', (modalWindow.openModal = () => modal.close()));
}
