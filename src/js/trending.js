import refs from './refs';
const { homeLink } = refs;
import Paginator from './components/paginator';
import Trending from './components/trending';
window.paginator = new Paginator();
const trending = new Trending();

homeLink.addEventListener('click', trending.onHomeButtonClicked.bind(trending));
document.addEventListener('DOMContentLoaded', trending.onHomePageLoaded.bind(trending));
