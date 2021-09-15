import getRefs from './get-refs';
import genres from '../genres.json';
import { apiService } from '../index';
import createGalleryMarkup from './create-gallery-markup';
import showAllert from './show-allert';

const refs = getRefs();
const genresList = ['Comedy', 'Drama', 'History', 'Family', 'Horror'];

export default function openGanresList(event) {
  event.preventDefault();
  const dropdownContent = document.querySelector('.dropdown-content');
  dropdownContent.classList.toggle('show');
  refs.genresDropdown.addEventListener('click', createGanreMarkup);
  document.addEventListener('click', closeSubMenu);
}

function closeSubMenu(event) {
  if (event.target.classList.contains('dropdown__menu')) return;
  const dropdownContent = document.querySelector('.dropdown-content');
  dropdownContent.classList.remove('show');
  document.removeEventListener('click', closeSubMenu);
}

function removeCurentPage() {
  if (
    refs.navHome.classList.contains('site-nav__link--current-page') ||
    refs.library.classList.contains('site-nav__link--current-page')
  ) {
    refs.navHome.classList.remove('site-nav__link--current-page');
    refs.library.classList.remove('site-nav__link--current-page');
    refs.genresList.classList.add('site-nav__link--current-page');
  }
}

function createGanreMarkup(event) {
  if (event.target.classList.contains('submenu')) {
    return;
  }
  removeCurentPage();
  refs.buttonsJs.innerHTML = '';
  let genreName = event.target.textContent;
  getGanreId(genreName);
  createGanreTitle(genreName);
}

function createGanreTitle(genreName) {
  const genreNameEl = document.createElement('h3');

  if (document.querySelector('.genreTitle')) {
    document.querySelector('.genreTitle').remove();
  }
  genreNameEl.textContent = genreName;
  genreNameEl.classList.add('genreTitle');
  let containerEl = document.querySelector('.container');
  containerEl.append(genreNameEl);
}

function getGanreId(genreName) {
  genres.map(ganre => {
    if (genreName === ganre.name) {
      fetchMoviesByGenfes(ganre.id);
    }
  });
}

function fetchMoviesByGenfes(id) {
  apiService.page = 1;
  apiService.fetchMoviesByGenre(id).then(createGalleryMarkup).catch(showAllert);
}
