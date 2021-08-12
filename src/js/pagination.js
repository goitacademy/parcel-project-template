import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import fetchPhotos from './example2';

const galleryUrl = document.querySelector('.gallery');
const container = document.getElementById('pagination');

export const pagination = new Pagination(container, {
  totalItems: 300,
  itemsPerPage: 20,
  visiblePages: 9,
  page: 1,
     firstItemClassName: 'tui-first-child',
     lastItemClassName: 'tui-last-child',
});


pagination.on('afterMove', (event) => {
  const currentPage = event.page;

  galleryUrl.innerHTML = "";
     fetchPhotos(currentPage);
});
