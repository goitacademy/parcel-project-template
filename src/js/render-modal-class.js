import * as basicLightbox from 'basiclightbox';
import modalTemplate from '../templates/one-movie-modal.hbs';

export default class Modal {
  constructor(data) {
    this.instance = basicLightbox.create(modalTemplate(data));
  }

  showModal() {
    this.instance.show();
  }

  closeModal() {
    this.instance.close();
  }
}
