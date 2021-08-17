import genres from './genres.json';
import { pagination } from './pagination';
import movieTemplate from '../templates/movie-card.hbs';
import modalWindow from './modal-window';

const axios = require('axios').default;
const galleryUrl = document.querySelector('.movies');

export default async function fetchMovieCards() {
  try {
    const page = pagination.getCurrentPage();
    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=eb0d0367818cd79735feb2881fbbeeec&page=${page}`,
    );
    const movieCards = response.data.results;

    const totalResults = await response.data.total_results;
    pagination.setTotalItems(totalResults);
    renderImgCard(movieCards);
    modalWindow();
  } catch (error) {
    console.error(error);
  }
}
fetchMovieCards();

function dateRelease(movies) {
  let movieDateRelease = '';
  if (movies.release_date) {
    movieDateRelease = movies.release_date.slice(0, 4);
  }
  return movieDateRelease;
}

function movieGenres(movies) {
  let genreText = [];
  genres.map(genre => {
    if (movies.genre_ids.includes(genre.id)) {
      genreText.push(` ${genre.name}`);
    }
  });
  if (genreText.length > 3) {
    genreText.splice(2, genreText.length - 2, ' Other');
  }
  return genreText;
}

export async function renderImgCard(movies) {
  const markupList = movies
    .map(movie => {
      movie.poster = movie.poster_path;
      movie.name = movie.original_title;
      movie.genre = movieGenres(movie);
      movie.relise = dateRelease(movie);
      return movieTemplate(movie);
    })
    .join('');
  galleryUrl.insertAdjacentHTML('beforeend', markupList);
}
