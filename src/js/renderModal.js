// import * as basicLightbox from 'basiclightbox';
// import createModalMarkup from '../templates/oneMovieModal.hbs';
// import refs from './refs.js';

// const { body } = refs;

// export default function renderModal(data) {
//   const cardMarkup = createModalMarkup(data);

//   const instance = basicLightbox.create(cardMarkup);
//   instance.show();

//   body.addEventListener('keydown', closeModalByKey);
//   body.addEventListener('click', closeModalByClick);
// }

// function closeModalByKey(e) {
//   if (e.code === 'Escape') {
//     instance.close();
//     body.removeEventListener('keydown', closeModalByKey);
//   }
// }

// function closeModalByClick(e) {
//   if (e.target.classList.contains('modal__icon')) {
//     instance.close();
//     body.removeEventListener('click', closeModalByClick);
//   }
// }
