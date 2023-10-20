import { fetchData } from './apiUtils';

// Funcție pentru obținerea listei de filme populare
const fetchPopularMovies = async page => {
  const params = { page: page };
  return fetchData('/trending/movie/week', params); // Efectuează cererea pentru filme populare
};

// Funcție pentru obținerea detaliilor
const fetchMovieDetails = async movieId => {
  const params = { language: 'en-US' };
  return fetchData(`/movie/${movieId}`, params); // Efectuează cererea pentru detalii de film
};

export { fetchPopularMovies, fetchMovieDetails };
