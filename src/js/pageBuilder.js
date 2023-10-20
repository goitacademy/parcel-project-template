import { fetchGenreList } from './fetchGenreList';
import { handleResponse } from './galleryBuilder';
import { fetchPopularMovies, fetchMovies } from './fetchMovieApi';

// Funcție pentru popularea paginii in main
const showPage = async (page, searchQuery = '') => {
  try {
    const genreList = await fetchGenreList();
    let response;

    if (searchQuery) {
      // Dacă există un termen de căutare, se obțin filmele corespunzătoare căutării   !!!! sa vedem cum imprelementam in search
      response = await fetchMovies(searchQuery, page);
    } else {
      // Dacă nu există un termen de căutare, se obțin filmele populare
      response = await fetchPopularMovies(page);
    }

    // Se afișează răspunsul în galerie
    handleResponse(response, searchQuery !== '', genreList);
  } catch (error) {
    console.error('Error', error);
  }
};

export { showPage };
