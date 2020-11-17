import popularTpl from '../templates/movies.hbs';
import FilmsApiService from './api-service';
import refs from './refs';

const filmsApiService = new FilmsApiService();

function markupPopularMovies(movies) {
  refs.moviesContainer.insertAdjacentHTML('beforeend', popularTpl(movies));
}

function showPopular() {
  return filmsApiService
    .fetchFilms()
    .then(list => {
      return filmsApiService.fetchGenres().then(arr =>
        list.map(el => ({
          ...el,
          genre_ids: el.genre_ids.flatMap(num =>
            arr.filter(el => el.id === num),
          ),
        })),
      );
    })
    .then(markupPopularMovies);
}

showPopular();
