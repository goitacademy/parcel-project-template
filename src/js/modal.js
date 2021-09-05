import * as basicLightbox from './basicLightbox.min.js';
import renderModalMarkup from '../templates/modalTpl.hbs';
import getRefs from './get-refs';
const refs = getRefs();
const modal = basicLightbox.create(renderModalMarkup());

export default function openModal(e) {
  e.preventDefault();

  modal.show();
  const modalWindow = document.querySelector('.modal');
  const closeBtn = document.querySelector('.modal__close-btn');
  document.onkeydown = evt => {
    if (evt.code === 'Escape') modal.close();
  };
  modalWindow.openModal = () => modal.close();
  closeBtn.addEventListener('click', (modalWindow.openModal = () => modal.close()));
}
