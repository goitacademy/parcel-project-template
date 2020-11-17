const API_KEY = '6914e86918040074e2fe382ba8e8cb5e';
const BASE_URL = 'https://api.themoviedb.org/3/';

export default class FilmsApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  fetchFilms() {
    return fetch(
      `${BASE_URL}trending/movie/day?api_key=${API_KEY}&page=${this.page}`,
    )
      .then(response => response.json())
      .then(({ results }) => {
        this.incrementPage();
        return results;
      });
  }

  fetchGenres() {
    return fetch(`${BASE_URL}genre/movie/list?api_key=${API_KEY}`)
      .then(response => response.json())
      .then(list => {
        return list.genres;
      });
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
