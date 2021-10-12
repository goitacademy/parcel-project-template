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

// {
//   cardMarkup: createModalMarkup(data),
//   instance: basicLightbox.create(this.cardMarkup),

//   openModal() {},

//   closeModalByKey(e) {
//     if (e.code === 'Escape') {
//       instance.close();
//       body.removeEventListener('keydown', closeModalByKey);
//     }
//   },

//   closeModalByClick(e) {
//     if (e.target.classList.contains('modal__icon')) {
//       instance.close();
//       body.removeEventListener('click', closeModalByClick);
//     }
//   },
// };
