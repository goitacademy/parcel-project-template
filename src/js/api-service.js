import storage from "./storage";

const API_KEY = '6914e86918040074e2fe382ba8e8cb5e';
const BASE_URL = 'https://api.themoviedb.org/3/';
const GENRES = "genres";

export default class FilmsApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  fetchFilms(url) {
    return fetch(
      `${BASE_URL}${url}?api_key=${API_KEY}&page=${this.page}&query=${this.searchQuery}`,
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
      .then(data => {
        const genres = {};
        data.genres.forEach(el => {
          genres[`${el.id}`] = el.name;
        });
        storage.save(GENRES, genres);
      });
  }

  showFilmsResult(url) {
    const genresList = storage.load(GENRES) || this.fetchGenres();

    return this.fetchFilms(url).then(data => data.map(el => {
      const newDate = el.release_date
        ? {
          ...el,
          genre_ids: el.genre_ids.map(id => genresList[id]),
          release_date: el.release_date.split('-')[0],
          vote_average: el.vote_average.toFixed(1),
        }
        : {
          ...el,
          genre_ids: el.genre_ids.map(id => genresList[id]),
          release_date: 'Unknown',
          vote_average: el.vote_average.toFixed(1),
        }
      return newDate;
    }));
  };


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

  singleRequest(id) {
    return fetch(`${BASE_URL}movie/${id}?api_key=${API_KEY}`).then(response =>
      response.json(),
    );
  }
}
