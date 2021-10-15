import apiConst from './api-const';
const { BASE_URL, MOVIE_ENDPOINT, API_KEY } = apiConst;

export default {
  async fetchMovie(id) {
    try {
      const response = await fetch(`${BASE_URL}/${MOVIE_ENDPOINT}/${id}?api_key=${API_KEY}`);
      console.log(response);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  },
};
