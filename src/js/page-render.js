import _debounce from 'debounce';
import validator from 'validator';
import cardHbs from '../templates/oneMovieCard.hbs';
import genres from '../js/components/genre-array.js';
import refs from '../js/refs.js';
import serviceApi from './api-service.js';

const { list, input, notifyEr } = refs;



input.addEventListener(
  'input',
  _debounce(e => {
    const queryValue = e.target.value.trim(' ');
    const validateQueryValue = validator.isEmpty(queryValue);
    notifyEr.classList.add('hide');
    list.innerHTML = ' ';
    if (!validateQueryValue) {
      render(queryValue);
    }
  }, 300),
);

const mapGenre = genreId => {
  const foundGenre = genres.find(genre => genre.id === genreId);
  if (foundGenre) {
    return foundGenre.name;
  }
  return '';
};

const updateMovieGenres = movie => {
  if (!movie.genre_ids.length) {
    return { ...movie, mappedGenres: 'Other' };
  }

  if (movie.genre_ids.length <= 3) {
    return {
      ...movie,
      mappedGenres: movie.genre_ids
        .map(mapGenre)
        .filter(genre => genre !== '')
        .join(', '),
    };
  }

  return {
    ...movie,
    mappedGenres: movie.genre_ids
      .map(mapGenre)
      .filter(genre => genre !== '')
      .slice(0, 2)
      .concat('Other')
      .join(', '),
  };
};

function render(query) {
  serviceApi
    .fetchDataDb(query)
    .then(param => {
      const showArrayElement = param.results;
      if (showArrayElement.length == 0) {
        notifyEr.classList.remove('hide');
        list.innerHTML = ' ';
      }
      return showArrayElement;
    })
      .then(elem => {
      const mappedMovies = elem.map(updateMovieGenres);
        console.log('mappedMovies:', mappedMovies);  
        
      const render = cardHbs(mappedMovies);
      list.insertAdjacentHTML('beforeend', render);
    });
}


