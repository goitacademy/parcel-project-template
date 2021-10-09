import './sass/main.scss';
import Paginator from './js/components/paginator';

window.paginator = new Paginator({ totalResults: 5000, onPageClick: console.log });

paginator.show();
