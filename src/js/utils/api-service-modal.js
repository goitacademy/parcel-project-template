import apiConst from './api-const';
const { BASE_URL, MOVIE_ENDPOINT, API_KEY } = apiConst;

export default {
  async fetchMovie(id) {
    try {
      const response = await fetch(
        `${this.BASE_URL}${this.TRENDING_ENDPOINT}${id}?api_key=${this.API_KEY}`,
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  },
};
