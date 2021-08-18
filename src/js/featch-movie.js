
const axios = require('axios').default;
import { renderImgCard } from './main-page';
import { pagination } from './pagination';
import modalWindow from './modal-window';

const galleryUrl = document.querySelector('.movies');
const inputUrl = document.querySelector('#search-form');
const alert =  document.querySelector('.error-message');


class FeatchMovie {
  constructor() {
    this.name = '';
    this.page = 1;
  }

  async getMovie() {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=eb0d0367818cd79735feb2881fbbeeec&query=${this.name}&page=${this.page}`,
      );
      const movie = await response.data.results;
      if (movie.length > 0) {renderImgCard(movie);
      const totalResults = await response.data.total_results;
      pagination.setTotalItems(totalResults);
        modalWindow();
        alert.classList.add('is-hiden');
      } else {
        alert.classList.remove('is-hiden');
      }

    } catch (error) {
      console.error(error);
    }
  }

  get query() {
    return this.name;
  }

  set query(newQuery) {
    this.name = newQuery;
  }

  get newPage() {
    return this.page;
  }

  set newPage(actualPage) {
    this.page = actualPage;
  }
}

export const featchMovie = new FeatchMovie();

inputUrl.addEventListener('submit', onUrlInput);

function onUrlInput(e) {
  e.preventDefault();
  if (e.currentTarget.elements.searchQuery.value.trim() === '') {
    return;
  }
  featchMovie.query = e.currentTarget.elements.searchQuery.value;

  pagination.movePageTo(1);
}
