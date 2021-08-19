import genres from './genres.json';
import { pagination } from './pagination';
import movieTemplate from '../templates/movie-card.hbs';
import modalWindow from './modal-window';

const axios = require('axios').default;
const homeGalleryList = document.querySelector('.home-gallery');
const containerWatched = document.getElementById('pagination__watched');
const containerQueue = document.getElementById('pagination__queue');

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

    containerWatched.classList.add('is-hiden');
    containerQueue.classList.add('is-hiden');
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

function moviePoster(movies) {
  let posterAlt = "";
  if (movies.poster_path) {
    posterAlt=`https://image.tmdb.org/t/p/original${movies.poster_path}`
   
  } else {
    posterAlt='https://lh3.googleusercontent.com/proxy/JSkfV3nWf1GRKPX0AqB1CcpRxA8i7Izz6OPx4raPggPeiNi4vbVkHHC-9IwgfAKOKl_UGlHnp4iIfDiXArX-1wX2b18ukwp576M2253sDtEIFYt6qpCLZTFSMqweZd-pcpMUhfw';
  }
  return posterAlt;
}

export async function renderImgCard(movies) {
  const markupList = movies
    .map(movie => {
      movie.poster = moviePoster(movie);
      movie.name = movie.original_title;
      movie.genre = movieGenres(movie);
      movie.release = dateRelease(movie);
      return movieTemplate(movie);
    })
    .join('');
  homeGalleryList.insertAdjacentHTML('beforeend', markupList);
}
