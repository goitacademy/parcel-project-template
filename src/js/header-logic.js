import watchedMovies from 

const refs = {
  header: document.querySelector('#header'),
  libraryNavigationBtn: document.querySelector('#library-navigation-btn'),
  filmoteca: document.querySelector('.header-logo'),
  filmIcon: document.querySelector('.film-icon'),
  searchForm: document.querySelector('.search-form'),
  libraryNavigation: document.querySelector('.library-navigation'),
  homeNavigatiomBtn: document.querySelector('#home-navigatiom-btn'),
  errorNotification: document.querySelector('.error-message'),
};

refs.libraryNavigationBtn.addEventListener('click', onLibraryNavigationBtnClick);
refs.filmoteca.addEventListener('click', onMainHeaderNavigationClick);
refs.filmIcon.addEventListener('click', onMainHeaderNavigationClick);
refs.homeNavigatiomBtn.addEventListener('click', onMainHeaderNavigationClick);

function onLibraryNavigationBtnClick() {
  refs.searchForm.classList.add('is-hiden');
  refs.header.classList.remove('main-header-overlay');
  refs.header.classList.add('library-haeder-overlay');
  refs.libraryNavigation.classList.remove('is-hiden');
  watchedMovies();
}

function onMainHeaderNavigationClick() {
  refs.header.classList.remove('library-haeder-overlay');
  refs.header.classList.add('main-header-overlay');
  refs.searchForm.classList.remove('is-hiden');
  refs.libraryNavigation.classList.add('is-hiden');
}

//Функция для отрисовки уведомления об ошибке поиска фильма
function errorNotification(totalResults) {
  if (totalResults === 0) {
    refs.errorNotification.classList.remove('is-hiden');
  } else {
    refs.errorNotification.classList.add('is-hiden');
  }
}
export { errorNotification };
