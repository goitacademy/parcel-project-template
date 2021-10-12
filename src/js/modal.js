// import renderModal from './renderModal.js';
import renderModalClass from './renderModalClass.js';
import apiService from './utils/api-service-modal.js';
import refs from './refs.js';

const { list, body } = refs;

list.addEventListener('click', openModal);

function openModal(e) {
  if (e.target.nodeName === 'IMG') {
    const id = e.target.dataset.sourse;

    apiService.fetchMovie(id).then(data => {
      // renderModal(data);
      const modal = new renderModalClass(data);
      modal.showModal();

      body.classList.toggle('modal-open');

      body.addEventListener('keydown', closeModalByKey);
      body.addEventListener('click', closeModalByClick);
      function closeModalByKey(e) {
        if (e.code === 'Escape') {
          modal.closeModal();
          body.classList.toggle('modal-open');
          body.removeEventListener('keydown', closeModalByKey);
        }
      }

      function closeModalByClick(e) {
        if (e.target.classList.contains('modal__button-close')) {
          modal.closeModal();
          body.classList.toggle('modal-open');
          body.removeEventListener('click', closeModalByClick);
        }
      }
    });
  }
}
