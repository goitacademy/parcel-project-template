import FilmsApiService from './api-service';
const filmsApiService = new FilmsApiService();

let genres = null;

export default function fixData(films) {
  return films.map(film => {
    film.release_date = fixDate(film.release_date);
    film.vote_average = fixRating(film.vote_average);
    //если объект содержит только id жанров
    if (film.hasOwnProperty('genre_ids')) {
      fixGenresID(film.genre_ids).then(
        fixedData => (film.genre_ids = fixedData),
      );
    } else {
      film = fixGenres(film); //передаем объект, чтобы изменить имя свойсва
    }
    return film;
  });
}

function getGenres() {
  return filmsApiService.fetchGenres(); //получае м жанры с сервера
}

function fixDate(date) {
  if (date != undefined) return date.split('-')[0];
  return false;
}

function fixRating(raiting) {
  if (raiting != undefined && raiting != 0) return raiting.toFixed(1);
  return false;
}

//функция заменяет id жанра на его название
async function fixGenresID(idGenres) {
  let fixedGenres = [];
  if (genres === null) {
    //делаем запрос за жанрами, если ранее еще не делали
    genres = await getGenres();
  }
  fixedGenres = idGenres.map(id => genres.find(genre => genre.id === id));
  return fixedGenres;
}

//функция изменяющая имя свойства с жанрами (оно разное в кратком и детальном описании фильма)
function fixGenres(film) {
  film.genre_ids = film.genres;
  delete film.genres;
  return film;
}

// filmsApiService
//   .fetchFilms('trending/movie/day')
//   .then(fixData)
//   .then(console.log);
