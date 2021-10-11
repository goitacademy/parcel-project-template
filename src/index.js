import './sass/main.scss';




import './js/site-nav.js';

import './js/page-render.js';
import './js/displayUserLibrary.js';


import Paginator from './js/components/paginator';
import Trending from './js/components/trending';

window.paginator = new Paginator();
const trending = new Trending();


document.addEventListener('DOMContentLoaded', trending.onHomePageLoaded.bind(trending));

import './js/page-render.js';
import './js/trending';
import './js/site-nav.js';
import './js/footer'