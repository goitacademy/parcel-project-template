const BASE_URL = 'https://api.themoviedb.org/3';
const TRENDING_ENDPOINT = 'trending/movie/day';
const API_KEY = '98387aa57f28e0e3eee6fec2a9b53ef3';

export default class TrendingAPI {
  constructor() {}

  async getMovies(fetchOptions = {}) {
    const { page = 1 } = fetchOptions;

    try {
      const response = await fetch(
        `${BASE_URL}/${TRENDING_ENDPOINT}?page=${page}&api_key=${API_KEY}`,
      );

      if (!response.ok) {
        throw new Error(`Error on getting trending movies from page ${page}`, error);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(`Error on getting trending movies from page ${page}`, error);
    }
  }
}
