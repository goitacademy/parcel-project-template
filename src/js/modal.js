import renderModalClass from './render-modal-class.js';
import apiService from './utils/api-service-modal.js';
import movieModalTemplate from '../templates/one-movie-modal.hbs';
import refs from './refs.js';
import getFilmsFromLocalStorage from './display-user-library.js';

const { list, body } = refs;

list.addEventListener('click', openModal);

function openModal(e) {
  if (e.target.nodeName === 'IMG') {
    const id = e.target.dataset.sourse;
    // ---set id to LS for render WATCED/QUEUE list
    localStorage.setItem('idModal', id);
    // ---
    apiService.fetchMovie(id).then(data => {
      if (data.genres.length === 0) {
        data.genre = 'Other';
      } else {
        data.genre = data.genres.map(genre => genre.name).join(', ');
      }

      let modalTemplate = movieModalTemplate(data);

      const modal = new renderModalClass(modalTemplate);
      modal.showModal();
      body.classList.add('modal-open');
      //----default btn-state REMOVE if id in LS
      const btnWatched = document.getElementById('toWatch');
      const btnQueue = document.getElementById('toQueue');
      if (localStorage.getItem('watched').includes(id)) {
          btnWatched.textContent = 'REMOVE FROM WATCHED';
      }
      if (localStorage.getItem('queue').includes(id)) {
          btnQueue.textContent = 'REMOVE FROM QUEUE';
      }
      // -----
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
// LOCAL STORAGE
// ADD TO LS
const addFilmsToLSbyButtonClick = {
  watched: [],
  queue: [],
  id: 0,

  checkLStoEmpty() {
    if (localStorage.getItem('watched') === null || localStorage.getItem('queue') === null) {
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
      const btnWatched = document.getElementById('toWatch');
      const btnQueue = document.getElementById('toQueue');
      // IF CHECKED ADD TO WATCHED
      if (e.target.id === 'toWatch') {
        if (!localStorage.getItem('watched').includes(addFilmsToLSbyButtonClick.getId())) {
          let getItemWatched = localStorage.getItem('watched');
          getItemWatched = JSON.parse(getItemWatched);
          getItemWatched.push(this.id);
          localStorage.setItem('watched', JSON.stringify(getItemWatched));
          btnWatched.classList.add('modal_btn_active');
          btnWatched.textContent = 'REMOVE FROM WATCHED';
        } else {
          confirm('Are you realy want to delete this film from Watched-list?');

          btnWatched.classList.remove('modal_btn_active'); 
          btnWatched.textContent = `ADD TO WATCHED`;

          let getItemWatched = localStorage.getItem('watched');
          getItemWatched = JSON.parse(getItemWatched);
          let index = getItemWatched.indexOf(this.id)
          getItemWatched.splice(index, 1);
          localStorage.setItem('watched', JSON.stringify(getItemWatched));
        }
      }
      // IF CHECKED ADD TO QUEUE
      if (e.target.id === 'toQueue') {
        if (!localStorage.getItem('queue').includes(addFilmsToLSbyButtonClick.getId())) {
          let getItemQueue = localStorage.getItem('queue');
          getItemQueue = JSON.parse(getItemQueue);
          getItemQueue.push(this.id);
          localStorage.setItem('queue', JSON.stringify(getItemQueue));
          btnQueue.classList.add('modal_btn_active');
          btnQueue.textContent = 'REMOVE FROM QUEUE';
        } else {
          confirm('Are you realy want to delete this film from Queue-list?');

          btnQueue.classList.remove('modal_btn_active'); 
          btnQueue.textContent = `ADD TO QUEUE`;

          let getItemQueue = localStorage.getItem('queue');
          getItemQueue = JSON.parse(getItemQueue);
          let index = getItemQueue.indexOf(this.id)
          getItemQueue.splice(index, 1);
          localStorage.setItem('queue', JSON.stringify(getItemQueue));
        }
      }
    }
  },
};

body.addEventListener('click', addFilmsToLSbyButtonClick.buttonListener);