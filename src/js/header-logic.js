import { watchedMovies } from './library';
import modalWindow from './modal-window';

const refs = {
  header: document.querySelector('#header'),
  libraryNavigationBtn: document.querySelector('#library-navigation-btn'),
  filmoteca: document.querySelector('.header-logo'),
  filmIcon: document.querySelector('.film-icon'),
  searchForm: document.querySelector('.search-form'),
  libraryNavigation: document.querySelector('.library-navigation'),
  homeNavigatiomBtn: document.querySelector('#home-navigatiom-btn'),
  errorNotification: document.querySelector('.error-message'),
  homeGalleryList: document.querySelector('.home-gallery'),
  watchedGalleryList: document.querySelector('.watched-gallery'),
  queueGalleryList: document.querySelector('.queue-gallery'),
};
console.log(refs.searchForm);
console.log(refs.homeGalleryList);
console.log(refs.watchedGalleryList);
console.log(refs.queueGalleryList);

refs.libraryNavigationBtn.addEventListener('click', onLibraryNavigationBtnClick);
refs.filmoteca.addEventListener('click', onMainHeaderNavigationClick);
refs.filmIcon.addEventListener('click', onMainHeaderNavigationClick);
refs.homeNavigatiomBtn.addEventListener('click', onMainHeaderNavigationClick);

function onLibraryNavigationBtnClick() {
  refs.searchForm.classList.add('is-hiden');
  refs.header.classList.remove('main-header-overlay');
  refs.header.classList.add('library-haeder-overlay');
  refs.libraryNavigation.classList.remove('is-hiden');
  console.log(refs.homeGalleryList);
  refs.homeGalleryList.style.display = 'none';
  // refs.watchedGalleryList.classList.remove('is-hiden');
  // refs.queueGalleryList.classList.remove('is-hiden');
  watchedMovies();
  modalWindow();
}

function onMainHeaderNavigationClick() {
  refs.header.classList.remove('library-haeder-overlay');
  refs.header.classList.add('main-header-overlay');
  refs.searchForm.classList.remove('is-hiden');
  refs.libraryNavigation.classList.add('is-hiden');
}
