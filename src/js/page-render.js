import _debounce from 'debounce';
import validator from 'validator';
import cardHbs from '../templates/oneMovieCard.hbs';
import genres from '../js/components/genre-array.js';
import refs from '../js/refs.js';
import serviceApi from './api-service.js';

const { list, input, notifyEr } = refs;

let searchQuery = '';

input.addEventListener(
  'input',
  _debounce(e => {
    const queryValue = e.target.value.trim(' ');
    const validateQueryValue = validator.isEmpty(queryValue);
    notifyEr.classList.add('hide');
    list.innerHTML = ' ';
    if (!validateQueryValue) {
      searchQuery = queryValue;
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

const fetchNewPagefromSearch = event => {
  serviceApi.changePage(event.page);
  serviceApi
    .fetchDataDb(searchQuery)
    .then(param => {
      const totalResults = param.total_results;
      const showArrayElement = param.results;
      if (showArrayElement.length == 0) {
        notifyEr.classList.remove('hide');
        list.innerHTML = '';
      }
      return { showArrayElement, totalResults };
    })
    .then(elem => {
      const { showArrayElement, totalResults } = elem;
      const mappedMovies = showArrayElement.map(updateMovieGenres);
      const render = cardHbs(mappedMovies);

      console.log('New elements fetched', showArrayElement);

      if (!window.paginator.isShown) {
        window.paginator.show();
      }
      list.innerHTML = render;
    });

  console.log('Search result triggered', event);
};

function render(query) {
  serviceApi
    .fetchDataDb(query)
    .then(param => {
      const totalResults = param.total_results;
      const showArrayElement = param.results;
      if (showArrayElement.length == 0) {
        notifyEr.classList.remove('hide');
        list.innerHTML = '';
      }
      return { showArrayElement, totalResults };
    })
    .then(elem => {
      const { showArrayElement, totalResults } = elem;
      const mappedMovies = showArrayElement.map(updateMovieGenres);
      const render = cardHbs(mappedMovies);

      window.paginator.onPageClick = fetchNewPagefromSearch;
      window.paginator.totalResults = totalResults;

      if (!window.paginator.isShown) {
        window.paginator.show();
      }
      list.innerHTML = render;
    });
}
