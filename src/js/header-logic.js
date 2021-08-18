import watchedMovies from './watchedMovies';
import queueMovies from './queueMovies';
import modalWindow from './modal-window';
import { newWatchedArray, newQueueArray, paginationWatched, paginationQueue } from './library';

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
  watchedButton: document.querySelector('.watched'),
  queueButton: document.querySelector('.queue'),
  containerWatched: document.getElementById('pagination__watched'),
  container: document.getElementById('pagination'),
  containerQueue : document.getElementById('pagination__queue'),
};

refs.libraryNavigationBtn.addEventListener('click', onLibraryNavigationBtnClick);
refs.filmoteca.addEventListener('click', onMainHeaderNavigationClick);
refs.filmIcon.addEventListener('click', onMainHeaderNavigationClick);
refs.homeNavigatiomBtn.addEventListener('click', onMainHeaderNavigationClick);
refs.watchedButton.addEventListener('click', onWatchedBtnClick);
refs.queueButton.addEventListener('click', onQueueBtnClick);

function onLibraryNavigationBtnClick() {
  refs.searchForm.classList.add('is-hiden');
  refs.header.classList.remove('main-header-overlay');
  refs.homeNavigatiomBtn.classList.remove('active-page');
  refs.libraryNavigationBtn.classList.add('active-page');
  refs.header.classList.add('library-haeder-overlay');
  refs.libraryNavigation.classList.remove('is-hiden');
  refs.errorNotification.classList.add('is-hiden');

  refs.watchedButton.classList.add('btn--active');
  refs.homeGalleryList.classList.add('is-hiden');
  refs.watchedGalleryList.classList.remove('is-hiden');
  refs.containerWatched.classList.remove('is-hiden');
  refs.container.classList.add('is-hiden');
  // refs.queueGalleryList.classList.remove('is-hiden');
  watchedMovies(newWatchedArray[0]);
  modalWindow();
}

function onMainHeaderNavigationClick() {
  refs.header.classList.remove('library-haeder-overlay');
  refs.header.classList.add('main-header-overlay');
  refs.searchForm.classList.remove('is-hiden');
  refs.libraryNavigation.classList.add('is-hiden');
  refs.libraryNavigationBtn.classList.remove('active-page');
  refs.homeNavigatiomBtn.classList.add('active-page');
  refs.homeGalleryList.classList.remove('is-hiden');
  refs.watchedGalleryList.classList.add('is-hiden');
  refs.queueGalleryList.classList.add('is-hiden');
  refs.containerWatched.classList.add('is-hiden');
  refs.container.classList.remove('is-hiden');
}

function onWatchedBtnClick() {
  refs.queueButton.classList.remove('btn--active');
  refs.watchedButton.classList.add('btn--active');
  refs.watchedGalleryList.classList.remove('is-hiden');
  refs.queueGalleryList.classList.add('is-hiden');
  refs.containerWatched.classList.remove('is-hiden');
  refs.containerQueue.classList.add('is-hiden');
  watchedMovies(newWatchedArray[0]);
  modalWindow();
  paginationWatched.movePageTo(1);
}

function onQueueBtnClick() {
  refs.watchedButton.classList.remove('btn--active');
  refs.queueButton.classList.add('btn--active');
  refs.queueGalleryList.classList.remove('is-hiden');
  refs.watchedGalleryList.classList.add('is-hiden');
  refs.containerWatched.classList.add('is-hiden');
  refs.containerQueue.classList.remove('is-hiden');
  queueMovies(newQueueArray[0]);
  modalWindow();
  paginationQueue.movePageTo(1);
}
