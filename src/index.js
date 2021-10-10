import './sass/main.scss';
import refs from './js/refs';
const { homeLink } = refs;

import './js/site-nav.js';
import './js/page-render.js';

import Paginator from './js/components/paginator';
import Trending from './js/components/trending';

window.paginator = new Paginator();
const trending = new Trending();

document.addEventListener('DOMContentLoaded', trending.onHomePageLoaded.bind(trending));
homeLink.addEventListener('click', trending.onHomeButtonClicked.bind(trending));
