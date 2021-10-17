import apiConst from './api-const';
const { BASE_URL, SEARCH_ENDPOINT, API_KEY } = apiConst;

export default {
  page: 1,

  async fetchDataDb(query) {
    try {
      const response = await fetch(
        `${BASE_URL}/${SEARCH_ENDPOINT}?api_key=${API_KEY}&language=en-US-ru&query=${query}&page=${this.page}`,
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.log('ошибка', error);
    }
  },

  changePage(number) {
    this.page = number;
  },
};
