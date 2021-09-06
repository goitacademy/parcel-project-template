import renderCards from '../templates/gallery.hbs';
import { apiService } from '../index';
import genres from '../genres.json';

import getRefs from './get-refs';
const refs = getRefs();
const watchedArr = JSON.parse(localStorage.getItem('Watched'));
let dataArr = [];
export default function createWatchedMarkup() {
  watchedArr.map(id =>
    apiService
      .getMovieByID(id)
      .then(data => arrPush(data))
      .then(createMarkup(dataArr)),
  );
}

function arrPush(data) {
  dataArr.push(data);
}

function createMarkup(dataArr) {
  let watchedList = [];

  watchedList = dataArr.map(data => {
    const genreList = [];
    data.genres.forEach(id => {
      const genreId = id.id;
      const genre = genres.find(genre => genre.id === genreId);
      if (genre && genreList.length <= 3) {
        if (genreList.length < 3) genreList.push(genre.name);
        else genreList[2] = 'others...';
      }
    });
    return {
      genres: genreList.join(', '),
      original_title: data.original_title,
      release_date: data.release_date.substring(0, 4),
      vote_average: data.vote_average,
      id: data.id,
      poster_path: data.poster_path,
    };
  });

  refs.movies.innerHTML = renderCards(watchedList);
}
