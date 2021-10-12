export default {
  API_KEY: '98387aa57f28e0e3eee6fec2a9b53ef3',
  BASE_URL: 'https://api.themoviedb.org/3',
  TRENDING_ENDPOINT: '/movie/',

  async fetchMovie(id) {
    try {
      const response = await fetch(
        `${this.BASE_URL}/${this.TRENDING_ENDPOINT}${id}?api_key=${this.API_KEY}`,
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.log('ошибка', error);
    }
  },
};
