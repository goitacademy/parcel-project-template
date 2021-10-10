import './sass/main.scss';
import Paginator from './js/components/paginator';
import Trending from './js/components/trending';

window.paginator = new Paginator();
const trending = new Trending();

document.addEventListener('DOMContentLoaded', trending.onHomePageLoaded.bind(trending));
