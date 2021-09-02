import showError from './show-allert.js';

export default class ApiService {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.page = 1;
  }

  async getTrendingMovies() {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/trending/movie/week?api_key=${this.apiKey}`,
      );
      return (await data.json()).results;
    } catch (err) {
      showAllert('Error communicating with server');
    }
  }

  async findMovies(query) {
    const searchQuery = query.trim();
    if (searchQuery === '') throw 'Empty query!';
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${searchQuery}&page=${this.page}`,
      );
      return (await data.json()).results;
    } catch (err) {
      showAllert('Error communicating with server');
    }
  }

  async getMovieByID(id) {
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
