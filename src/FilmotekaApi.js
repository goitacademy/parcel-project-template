// all apis to be added here (eg. fetch all movies)
const API_KEY = '39759882-73fa965e3ac5dd440dc8af6ef';

import Notiflix from 'notiflix';

Notiflix.Notify.init();

export default class Filmotekapi {
  constructor() {
    this.page = 1;
    this.searchValue = '';
    this.perPage = 10;
    this.requestHeaders = {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3M2UwY2ExZGYxYWJhYmYxZWVlZjJhOGE4MmMyYThjZCIsInN1YiI6IjY1MzE2ZDE1ZWZlMzdjMDExZTczY2M3OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FoRGU6m9gziu61qUxPPyDVQErvDwlWIGVUuccJ5drm0',
    };
  }
  FILMOTEKA_BASE_URL = 'https://api.themoviedb.org';

  async getGenres() {
    const res = await fetch(
      `${this.FILMOTEKA_BASE_URL}/3/genre/movie/list?language=en-US`,
      {
        headers: this.requestHeaders,
        method: 'GET',
      }
    );
    const data = await res.json();
    return data.genres;
  }

  async getMovies() {
    const genres = await this.getGenres();
    const res = await fetch(
      `${this.FILMOTEKA_BASE_URL}/3/trending/all/day?language=en-US&page=${this.page}`,
      {
        headers: this.requestHeaders,
        method: 'GET',
      }
    );

    const data = await res.json();

    return data.results.map(item => {
      const movieGenreIds = item.genre_ids;

      const movieGenres = genres
        .filter(genre => movieGenreIds.includes(genre.id))
        .map(genre => genre.name);

      return {
        title: item.title || item.name,
        releaseDate: item.release_date || item.first_air_date,
        genres: movieGenres.join(','),
        poster: item.poster_path,
      };
    });
  }

  resetPage() {
    this.page = 1;
  }

  incrementPage() {
    this.page += 1;
  }
}
