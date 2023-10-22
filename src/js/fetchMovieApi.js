import { fetchData } from './apiUtils';

// Funcție pentru obținerea listei de filme în funcție de un cuvânt cheie și pagină
const fetchMovies = async (searchQuery, page) => {
  const params = {
    query: searchQuery,
    include_adult: false,
    language: 'en-US',
    page: page,
  };
  return fetchData('/search/movie', params); // Efectuează cererea pentru filme
};

// Funcție pentru obținerea listei de filme populare în funcție de pagină
const fetchPopularMovies = async page => {
  const params = { page: page };
  return fetchData('/trending/movie/week', params); // Efectuează cererea pentru filme populare
};

// Funcție pentru obținerea detaliilor unui film specific în funcție de ID
const fetchMovieDetails = async movieId => {
  const params = { language: 'en-US' };
  return fetchData(`/movie/${movieId}`, params); // Efectuează cererea pentru detalii de film
};

export { fetchMovies, fetchPopularMovies, fetchMovieDetails };
