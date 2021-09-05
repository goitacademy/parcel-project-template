// import modalTpl from '../templates/modalTpl.hbs';
// import homeMovies from '../templates/home-movies.hbs'

// const refs = {
//   moviesContainer: document.querySelector('.movies__collection'),
//   backdrop: document.querySelector('[data-modal]'),
//   closeModalBtn: document.querySelector('[data-modal-close]')
// };

// refs.moviesContainer.addEventListener('click', openModal);
// refs.closeModalBtn.addEventListener('click', closeModal);
// refs.backdrop.addEventListener('click', closeOnBackdrop);

// function openModal(evt) {
//   if (!evt.target.classList.contains('movie-card')) {
//     return;
//   }
//   document.body.classList.toggle('modal-open');
//   refs.backdrop.classList.toggle('is-hidden');
//   window.addEventListener('keydown', closeEscModal);
// }

// function closeOnBackdrop(event) {
//   if (event.target === event.currentTarget) {
//     closeModal(event);
//   }
// }

// function closeEscModal(event) {
//   const ESC_KEY_CODE = 'Escape';
//   if (event.code === ESC_KEY_CODE) {
//     closeModal();
//   };
// }

// function closeModal() {
//   refs.backdrop.classList.toggle('is-hidden');
//   window.removeEventListener('keydown', closeModal);
// }
