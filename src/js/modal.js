import renderModalClass from './render-modal-class.js';
import apiService from './utils/api-service-modal.js';
import refs from './refs.js';

const { list, body } = refs;

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

const nameArray = {
  watched: [],
  quequ: [],
  
  arrayPresence() {
    if (localStorage.getItem('watched') === null) {
      localStorage.setItem('watched', JSON.stringify(this.watched));
      localStorage.setItem('quequ', JSON.stringify(this.quequ));
    }
  },

  buttonListener(e) {
    nameArray.arrayPresence();

    if (e.target.nodeName === 'BUTTON') {
      const btnEl = e.target;
      btnEl.dataset.data = nameArray.getId();

      if (e.target.id === 'toWatch') {
        if (!localStorage.getItem('watched').includes(nameArray.getId())) {
          let getItemArray = localStorage.getItem('watched');
          getItemArray = JSON.parse(getItemArray);
          getItemArray.push(btnEl.dataset.data);
          localStorage.setItem('watched', JSON.stringify(getItemArray));
        } else {
          alert('This added movie, choose another ');
        }
      }

      if (e.target.id === 'toQuequ') {
        if (!localStorage.getItem('quequ').includes(nameArray.getId())) {
          let getItemQuequ = localStorage.getItem('quequ');
          getItemQuequ = JSON.parse(getItemQuequ);
          getItemQuequ.push(btnEl.dataset.data);
          localStorage.setItem('quequ', JSON.stringify(getItemQuequ));
        } else {
          alert('This added movie, choose another');
        }
      }
    }
  },
  getId() {
    const id = localStorage.getItem('idModal');
    return id;
  },
};

body.addEventListener('click', nameArray.buttonListener);
