import _debounce from 'debounce';
import validator from 'validator';
import refs from './refs.js';
import serviceApi from './utils/api-service.js';
import trending from './components/trending.js';
import { drawCards, scrollToTop } from './components/gallery-adapter';

const { list, input, notifyEr, searchHeadIcon } = refs;

const Trending = new trending();

let searchQuery = '';

input.addEventListener(
  'input',
  _debounce(e => {
    const queryValue = e.target.value.trim(' ');
    const validateQueryValue = validator.isEmpty(queryValue);
    notifyEr.classList.add('hide');
    searchHeadIcon.classList.remove('hideInMobile');
    list.innerHTML = ' ';
    if (!validateQueryValue) {
      searchQuery = queryValue;
      render(queryValue);
    } else {
      Trending.onHomePageLoaded();
    }
  }, 300),
);

const fetchNewPagefromSearch = event => {
  serviceApi.changePage(event.page);
  serviceApi
    .fetchDataDb(searchQuery)
    .then(param => {
      const totalResults = param.total_results;
      const showArrayElement = param.results;
      if (showArrayElement.length == 0) {
        notifyEr.classList.remove('hide');
        searchHeadIcon.classList.add('hideInMobile');
        list.innerHTML = '';
      }
      return { showArrayElement, totalResults };
    })
    .then(elem => {
      const { showArrayElement, totalResults } = elem;
      drawCards(showArrayElement);
      scrollToTop();

      if (!window.paginator.isShown) {
        window.paginator.show();
      }
    });
};

function render(query) {
  serviceApi
    .fetchDataDb(query)
    .then(param => {
      const totalResults = param.total_results;
      const showArrayElement = param.results;
      if (showArrayElement.length == 0) {
        notifyEr.classList.remove('hide');
        searchHeadIcon.classList.add('hideInMobile');
        list.innerHTML = '';
      }
      return { showArrayElement, totalResults };
    })
    .then(elem => {
      const { showArrayElement, totalResults } = elem;

      drawCards(showArrayElement);

      window.paginator.onPageClick = fetchNewPagefromSearch;
      window.paginator.totalResults = totalResults;

      if (!window.paginator.isShown) {
        window.paginator.show();
      }
    });
}
