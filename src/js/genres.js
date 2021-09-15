import getRefs from './get-refs';
import genres from '../genres.json';
import { apiService } from '../index';
import createGalleryMarkup from './create-gallery-markup';
import showAllert from './show-allert';

const refs = getRefs();
const genresList = ['Comedy', 'Drama', 'History', 'Family', 'Horror'];

export default function openGanresList(event) {
  event.preventDefault();
  removeCurentPage();
  refs.buttonsJs.innerHTML = '';
  const dropdownContent = document.querySelector('.dropdown-content');
  dropdownContent.classList.toggle('show');
  refs.genresDropdown.addEventListener('click', createGanreMarkup);
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
  console.log(event.target);
  if (event.target.classList.contains('submenu')) {
    return;
  }
  let genreName = event.target.textContent;
  console.log(genres);
  getGanreId(genreName);
  createGanreTitle(genreName);
}

function createGanreTitle(genreName) {
  console.log(document.querySelector('.genreTitle'));
  const genreNameEl = document.createElement('h3');

  if (document.querySelector('.genreTitle')) {
    document.querySelector('.genreTitle').remove();
  }
  genreNameEl.textContent = genreName;
  genreNameEl.classList.add('genreTitle');
  console.log(genreNameEl);
  let containerEl = document.querySelector('.container');
  console.log(containerEl);
  containerEl.append(genreNameEl);
  console.log(document.querySelector('.genreTitle'));
}

function getGanreId(genreName) {
  genres.map(ganre => {
    if (genreName === ganre.name) {
      console.log(ganre.id);
      fetchMoviesByGenfes(ganre.id);
    }
  });
}

function fetchMoviesByGenfes(id) {
  apiService.page = 1;
  apiService.fetchMoviesByGenre(id).then(createGalleryMarkup).catch(showAllert);
}
