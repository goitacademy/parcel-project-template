import axios from 'axios';

const API_KEY = '24996ba1a77f5ecd2a2a683701ea072b';
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
