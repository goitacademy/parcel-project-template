import apiConst from './api-const';
const { BASE_URL, SEARCH_ENDPOINT, API_KEY } = apiConst;

const api = {
  page: 1,

  async fetchDataDb(query) {
    try {
      const response = await fetch(
        `${BASE_URL}/${SEARCH_ENDPOINT}?api_key=${API_KEY}&language=en-US-ru&query=${query}&page=${this.page}`,
      );
      const data = await response.json();
      
      return data;
    } catch (error) {
      alert (error)
    }
  },

  changePage(number) {
    this.page = number;
  },

  async fetchMoviesByIds(ids) {
    const promisesList = ids.map((id) => {
      return fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US-ru`).then(response => response.json());
    });

    const responsesList = await Promise.all(promisesList);
    return responsesList;
  },
};


export default api
