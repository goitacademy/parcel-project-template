import * as basicLightbox from 'basiclightbox';
import createModalMarkup from '../templates/oneMovieModal.hbs';

export default class Modal {
  constructor(data) {
    this.instance = basicLightbox.create(createModalMarkup(data));
  }

  showModal() {
    this.instance.show();
  }

  closeModal() {
    this.instance.close();
  }
}
