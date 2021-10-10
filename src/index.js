import './sass/main.scss';

import './js/footer'

import './js/site-nav.js';

import Paginator from './js/components/paginator';
import Trending from './js/components/trending';

window.paginator = new Paginator();
const trending = new Trending();


document.addEventListener('DOMContentLoaded', trending.onHomePageLoaded.bind(trending));

