import renderModalClass from './render-modal-class.js';
import apiService from './utils/api-service-modal.js';
import refs from './refs.js';

const { list, body} = refs;


list.addEventListener('click', openModal);

function openModal(e) {
  
  if (e.target.nodeName === 'IMG') {
    const id = e.target.dataset.sourse;
    localStorage.setItem('idModal', id);

    apiService.fetchMovie(id).then(data => {
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
          removeModalOpenAndEventListeners();
        }
      }

      function closeModalByClick(e) {
        if (
          e.target.classList.contains('modal__button-close') ||
          e.target.classList.contains('basicLightbox')
        ) {
          modal.closeModal();
          removeModalOpenAndEventListeners();
        }
      }

      function removeModalOpenAndEventListeners() {
        body.classList.remove('modal-open');
        body.removeEventListener('click', closeModalByClick);
        body.removeEventListener('keydown', closeModalByKey);
      }
    });
  }
}

// ADD TO LS
const addFilmsToLSbyButtonClick = {
  watched: [],
  queue: [],
  id: 0,
  
  checkLStoEmpty() {
    if (localStorage.getItem('watched') === null || localStorage.getItem('queue') === null ) {
      localStorage.setItem('watched', JSON.stringify(this.watched));
      localStorage.setItem('queue', JSON.stringify(this.queue));
    }
  },
  
  getId() {
    return localStorage.getItem('idModal');
  },
  
  buttonListener(e) {
    addFilmsToLSbyButtonClick.checkLStoEmpty();

    if (e.target.nodeName === 'BUTTON') {
      const btnEl = e.target;
      btnEl.dataset.data = addFilmsToLSbyButtonClick.getId();
      this.id = btnEl.dataset.data;

      if (e.target.id === 'toWatch') {
        if (!localStorage.getItem('watched').includes(addFilmsToLSbyButtonClick.getId())) {
          let getItemWatched = localStorage.getItem('watched');
          getItemWatched = JSON.parse(getItemWatched);
          getItemWatched.push(this.id);
          localStorage.setItem('watched', JSON.stringify(getItemWatched));
        } else {
          alert('This added movie, choose another ');
        }
      }

      if (e.target.id === 'toQueue') {
        if (!localStorage.getItem('queue').includes(addFilmsToLSbyButtonClick.getId())) {
          let getItemQueue = localStorage.getItem('queue');
          getItemQueue = JSON.parse(getItemQueue);
          getItemQueue.push(this.id);
          localStorage.setItem('queue', JSON.stringify(getItemQueue));
        } else {
          alert('This added movie, choose another');
        }
      }
    }
  },
};

body.addEventListener('click', addFilmsToLSbyButtonClick.buttonListener);
