import Pagination from 'tui-pagination';
import fetchMovieCards from './main-page';
import { featchMovie } from './featch-movie';

const homeGalleryList = document.querySelector('.home-gallery');
const container = document.getElementById('pagination');

export const pagination = new Pagination(container, {
  totalItems: 300,
  itemsPerPage: 20,
  visiblePages: 9,
  page: 1,
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
});

pagination.on('afterMove', onPaginationClick);

function onPaginationClick(event) {
  let mask = document.querySelector('.mask');

  mask.classList.remove('hide');
  mask.style.display = 'flex';
  setTimeout(() => {
    mask.style.display = 'none';
  }, 600);

  const currentPage = event.page;
  homeGalleryList.innerHTML = '';

  if (featchMovie.query === '') {
    fetchMovieCards(currentPage);
  } else {
    featchMovie.newPage = currentPage;
    featchMovie.getMovie();
  }
}
