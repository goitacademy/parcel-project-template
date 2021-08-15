let debounce = require('lodash.debounce');
const axios = require('axios').default;
import { renderImgCard } from './main-page';
import { pagination } from './pagination';



const galleryUrl = document.querySelector('.movies');
const inputUrl = document.querySelector('.film-search-input');

const DEBOUNCE_DELAY = 500;



class FeatchMovie {
  constructor() {
    this.name = "";
    this.page = 1;
  }



  async getMovie() {
    try {
    
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=eb0d0367818cd79735feb2881fbbeeec&query=${this.name}&page=${this.page}`,
      );
        const movie = await response.data.results;

       renderImgCard(movie)
      const totalResults = await response.data.total_results;
        pagination.setTotalItems(totalResults);

    } catch (error) {
      console.error(error);
    }
  };

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



inputUrl.addEventListener("input", debounce(onUrlInput, DEBOUNCE_DELAY));

function onUrlInput(e) {
     e.preventDefault();
    if (e.target.value.trim() === "") {
        return
    }
    featchMovie.query = e.target.value;
   
    pagination.movePageTo(1);
};

