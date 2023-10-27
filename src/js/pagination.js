import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import refs from './refs';
import { getByKeyword, getTrending } from './api';
const TUI_VISIBLE_PAGES = 7;

export function createPagination(totalItems, visiblePages) {
  const options = {
    itemsPerPage: 24,
    totalItems: totalItems,
    visiblePages: visiblePages < 7 ? visiblePages : TUI_VISIBLE_PAGES,
  };

  const pagination = new Pagination(refs.pagination, options);

  if (visiblePages > 1) {
    refs.pagination.style.display = 'block';
  } else {
    refs.pagination.style.display = 'none';
  }

  return pagination;
}
