import renderModalClass from './render-modal-class.js';
import apiService from './utils/api-service-modal.js';
import refs from './refs.js';

const { list, body } = refs;

list.addEventListener('click', openModal);

function openModal(e) {
  if (e.target.nodeName === 'IMG') {
    const id = e.target.dataset.sourse;

    apiService.fetchMovie(id).then(data => {
      console.log(data);
      if (data.genres.length === 0) {
        data.genre = 'Other';
      } else {
        data.genre = data.genres.map(genre => genre.name).join(', ');
      }

      const modal = new renderModalClass(data);
      modal.showModal();

      body.classList.add('modal-open');

      body.addEventListener('keydown', closeModalByKey);
      body.addEventListener('click', closeModalByClick);

      function closeModalByKey(e) {
        if (e.code === 'Escape') {
          modal.closeModal();
          body.classList.remove('modal-open');
          body.removeEventListener('keydown', closeModalByKey);
        }
      }

      function closeModalByClick(e) {
        if (
          e.target.classList.contains('modal__button-close') ||
          e.target.classList.contains('basicLightbox')
        ) {
          modal.closeModal();
          body.classList.remove('modal-open');
          body.removeEventListener('click', closeModalByClick);
        }
      }
    });
  }
}
