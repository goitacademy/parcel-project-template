import * as basicLightbox from 'basiclightbox';

export default class Modal {
  constructor(modalTemplate) {
    this.instance = basicLightbox.create(modalTemplate);
  }

  showModal() {
    this.instance.show();
  }

  closeModal() {
    this.instance.close();
  }
}
