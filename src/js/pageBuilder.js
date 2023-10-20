import { fetchGenreList } from './fetchGenreList';
import { handleResponse } from './galleryBuilder';
import { fetchMovies, fetchPopularMovies } from './fetchMovieApi';

// Funcție pentru popularea paginii in main
const showPage = async (page, isSearch = false, searchQuery = '') => {
  try {
    const genreList = await fetchGenreList();
    let response;

    if (isSearch) {
      response = await fetchMovies(searchQuery, page);
    } else {
      response = await fetchPopularMovies(page);
    }

    handleResponse(response, isSearch, genreList);
  } catch (error) {
    console.error('Error', error);
  }
};
export { showPage };
