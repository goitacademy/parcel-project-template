import apiConst from './api-const';
const { BASE_URL, TRENDING_ENDPOINT, API_KEY } = apiConst;

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
