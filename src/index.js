import './sass/main.scss';

import './js/site-nav.js';

import Paginator from './js/components/paginator';

window.paginator = new Paginator({ totalResults: 5000, onPageClick: console.log });

paginator.show();
/* Example on how to use paginator and override onClick hook:
*
paginator.totalResults = 50;
paginator.onPageClick = e => {
  console.log(e);
  console.log(`Page was clicked: ${e.page}`);
};
*/