import refs from './refs';
import { getByKeyword } from './api';
import { createGalleryMarkup } from './create-gallery-markup';
import { createPagination } from './pagination';
import { scrollOnTop } from './scroll-on-top';
import { showHideLoader } from './loader';

refs.form.addEventListener('submit', onSearchByKeyword);
let query;

function onSearchByKeyword(e) {
  e.preventDefault();
  query = e.target.searchQuery.value.trim();
  let page = 1;
  refs.formWarning.textContent = '';
  if (!query) {
    setTimeout(() => {
      refs.formWarning.classList.add('is-hidden');
    }, 5000);
    refs.formWarning.classList.remove('is-hidden');
    refs.formWarning.textContent =
      'Search query is empty. Enter the correct movie name';
    return;
  }

  showHideLoader(refs.loader);
  refs.gallery.innerHTML = '';
  if (page === 1) {
    refs.pagination.style.display = 'none';
  } else {
    refs.pagination.style.display = 'block';
  }

  getByKeyword(query, page)
    .then(data => {
      showHideLoader(refs.loader);
      if (!data.total_results) {
        setTimeout(() => {
          refs.formWarning.classList.add('is-hidden');
        }, 5000);
        refs.formWarning.classList.remove('is-hidden');
        refs.formWarning.textContent =
          'Search result not successful. Enter the correct movie name';
        return;
      }
      refs.gallery.innerHTML = createGalleryMarkup(data.results);

      const pagination = createPagination(data.total_results, data.total_pages);

      pagination.on('beforeMove', ({ page }) => {
        showHideLoader(refs.loader);
        refs.gallery.innerHTML = '';
        getByKeyword(query, page).then(data => {
          showHideLoader(refs.loader);
          refs.gallery.innerHTML = createGalleryMarkup(data.results);
          scrollOnTop();
        });
      });
    })
    .catch(error => console.log(error));
}
