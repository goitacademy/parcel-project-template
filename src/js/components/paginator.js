import Pagination from 'tui-pagination';
import refs from '../refs';

const { paginationEl } = refs;
const ITEMS_PER_PAGE = 20;
const VISIBLE_PAGES = 5;

export default class Paginator {
  #onPageClick;
  #totalResults;
  #isShown;

  constructor(options = {}) {
    const { totalResults = 0, onPageClick = console.log } = options;
    this.#onPageClick = onPageClick;
    this.#totalResults = totalResults;
    this.#isShown = false;
    this.pagination = new Pagination(paginationEl, {
      totalItems: this.#totalResults,
      itemsPerPage: ITEMS_PER_PAGE,
      visiblePages: VISIBLE_PAGES,
    });
    this.pagination.on('beforeMove', this.#onPageClick);
  }

  show() {
    paginationEl.classList.remove('tui-pagination--is-hidden');
    this.#isShown = true;
  }

  hide() {
    paginationEl.classList.add('tui-pagination--is-hidden');
    this.#isShown = false;
  }

  set onPageClick(newCallback) {
    this.#onPageClick = newCallback;
    //ditry hack to remove all existing event listeners
    this.pagination.events.beforeMove = [];
    this.pagination.on('beforeMove', this.#onPageClick);
  }

  set totalResults(newTotalResults) {
    this.pagination.reset(newTotalResults);
  }

  get onPageClick() {
    return this.#onPageClick;
  }

  get isShown() {
    return this.#isShown;
  }
}
