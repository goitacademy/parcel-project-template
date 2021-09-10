import showAllert from './show-allert.js';

export default class ApiService {
  constructor(apiKey) {
    this.query = '';
    this.apiKey = apiKey;
    this.page = 1;
    this.totalItems = 1;
    this.totalPages = 1;
  }

  async getTrendingMovies(page = this.page) {
    loader.show(20);
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/trending/movie/week?api_key=${this.apiKey}`,
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

  async findMovies(query, page = this.page) {
    const searchQuery = query.trim();
    if (searchQuery === '') throw 'Empty query!';
    loader.show(20);
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${searchQuery}&page=${page}`,
      );
      const resultArr = (await data.json()).results;
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
}
