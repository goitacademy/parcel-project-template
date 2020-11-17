import popularTpl from '../templates/popular.hbs';

const API_KEY = '6914e86918040074e2fe382ba8e8cb5e';
const BASE_URL = 'https://api.themoviedb.org/3/';

const refs = {
  popularContainer: document.querySelector('.js-film-container'),
};

function getPopular(page) {
  return fetch(`${BASE_URL}trending/movie/day?api_key=${API_KEY}&page=${page}`)
    .then(response => response.json())
    .then(({ results }) => results)
    .catch(error => {
      console.log(error);
    });
}

function markupPopularMovies(movies) {
  refs.popularContainer.insertAdjacentHTML('beforeend', popularTpl(movies));
}

function getGenres() {
  return fetch(`${BASE_URL}genre/movie/list?api_key=${API_KEY}`)
    .then(response => response.json())
    .then(list => {
      return list.genres;
    })
    .catch(error => {
      console.log(error);
    });
}

function showPopular(page) {
  return getPopular(page)
    .then(list => {
      return getGenres().then(arr =>
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

showPopular(1);
