import noposter from '../images/noposter.jpg';
import { genresLibraryFormat } from './genres-format';

export function createLibraryMarkup(movies) {
  return movies
    .map(movie => {
      const poster = movie.poster_path
        ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
        : noposter;

      const genres = genresLibraryFormat(movie.genres);

      return `
      <li class="movie__card" data-movie="${movie.id}">
        <div class="movie__thumb">        
            <img class="movie__image"
            src="${poster}"
            alt=${movie.title ?? movie.name}
            loading="lazy"
            />      
        </div>
        <div class="movie__info">
          <p class="movie__name">${movie.title ?? movie.name}</p>
          <p class="movie__descr"> ${genres} | ${(
        movie.release_date ?? movie.first_air_date
      ).slice(0, 4)}</p>
        </div>
      </li>`;
    })
    .join('');
}
