import showAllert from './show-allert.js';

window.OPEN_NOW_FILM_ID = 'null';

export default class ApiService {
  constructor(apiKey) {
    this.query = '';
    this.apiKey = apiKey;
    this.page = 1;
    this.totalItems = 1;
    this.totalPages = 1;
  }

  async getTrendingMovies(page = this.page) {
    this.query = '';
    loader.show(20);
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/trending/movie/week?api_key=${this.apiKey}&page=${page}`,
      );
      const serverAnswer = await data.json();
      this.totalPages = serverAnswer.total_pages;
      const resultArr = serverAnswer.results;
      if (resultArr.length === 0) {
        showAllert('Nothing more found.');
        loader.hide();
      }
      loader.totalCards = resultArr.length;
      return resultArr;
    } catch (err) {
      showAllert('Error communicating with server');
    }
  }

  async findMovies(query = this.query, page = this.page) {
    const searchQuery = query.trim();
    if (searchQuery === '') throw 'Empty query!';
    this.query = searchQuery;
    loader.show(20);
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${searchQuery}&page=${page}`,
      );
      const serverAnswer = await data.json();
      this.totalPages = serverAnswer.total_pages;
      const resultArr = serverAnswer.results;
      if (resultArr.length === 0) {
        showAllert('Nothing found. Please specify your request.');
        loader.hide();
      }
      loader.totalCards = resultArr.length;
      return resultArr;
    } catch (err) {
      showAllert('Error communicating with server');
    }
  }

  async getMovieByID(id) {
    OPEN_NOW_FILM_ID = id;
    console.log('FILM ID', OPEN_NOW_FILM_ID);
    loader.show(1);
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${this.apiKey}&language=en-US`,
      );
      return await data.json();
    } catch (err) {
      showAllert('Error communicating with server');
    }
  }

  async getTopMovies() {
    loader.show(20);
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${this.apiKey}&language=en-US&page=1`,
      );
      const resultArr = (await data.json()).results;
      if (resultArr.length === 0) {
        showAllert('Nothing more found.');
        loader.hide();
      }
      loader.totalCards = resultArr.length;
      return resultArr;
    } catch (err) {
      showAllert('Error communicating with server');
    }
  }
}
