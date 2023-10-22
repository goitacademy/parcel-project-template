import axios from 'axios';

const API_KEY = '3146fac2a7dcce2e95e0f76d4221aa50';
const ENDPOINT = 'https://api.themoviedb.org/3/search/movie';

export default class TheMovieDbApi {
  constructor() {
    this.queryPage = 1;
  }

  async getMoviesByName(name) {
    const params = {
      api_key: API_KEY,
      query: name,
      queryPage: this.queryPage,
      language: 'en-US',
      include_adult: false,
    };

    const response = await axios.get(ENDPOINT, { params });
    return response.data;
  }
}
