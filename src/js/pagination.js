import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import fetchMovieCards from './main-page';
import { featchMovie } from './featch-movie';

const galleryUrl = document.querySelector('.movies');
const container = document.getElementById('pagination');

export const pagination = new Pagination(container, {
  totalItems: 300,
  itemsPerPage: 20,
  visiblePages: 9,
  page: 1,
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
});



pagination.on('afterMove', onPaginationClick)


function onPaginationClick(event) {
  const currentPage = event.page;
  galleryUrl.innerHTML = '';
  
   if (featchMovie.query === ""){fetchMovieCards(currentPage)}
    
  else{ featchMovie.newPage = currentPage;
     featchMovie.getMovie()}
   
  
}





