import renderFilmsCards from '../templates/watchedAndQueueTpl.hbs';
import { apiService } from '../index';
import genres from '../genres.json';
import deleteFromList from './deleteFromList';
import getRefs from './get-refs';
const refs = getRefs();

export default async function createWatchedMarkup() {
  changeActiveWachedBtn();
  let dataArr = [];
  const watchedArr = JSON.parse(localStorage.getItem('Watched'));
  if (watchedArr === null) {
    refs.movies.innerHTML = '';
    return;
  } else {
    for (let i = 0; i < watchedArr.length; i++) {
      const data = await apiService.getMovieByID(watchedArr[i]);
      dataArr.push(data);
    }
    createMarkup(dataArr);
  }
}

function createMarkup(dataArr) {
  let watchedList = [];

  dataArr.forEach(data => {
    const genreList = [];
    data.genres.forEach(id => {
      const genreId = id.id;
      const genre = genres.find(genre => genre.id === genreId);
      if (genre && genreList.length <= 2) {
        if (genreList.length < 2) genreList.push(genre.name);
        else genreList[2] = 'others...';
      }
    });
    return watchedList.push({
      genres: genreList.join(', '),
      original_title: data.original_title,
      release_date: data.release_date.substring(0, 4),
      vote_average: data.vote_average,
      id: data.id,
      poster_path: data.poster_path,
    });
  });

  refs.movies.innerHTML = renderFilmsCards(watchedList);
  refs.movies.addEventListener('click', deleteFromList);
}

function changeActiveWachedBtn() {
  const watchedBtn = document.getElementById('watched');
  const queueBtn = document.getElementById('queue');

  queueBtn.classList.replace('button-orange', 'button-white');
  queueBtn.classList.remove('button-active');
  // queueBtn.setAttribute("disabled", "false")

  watchedBtn.classList.replace('button-white', 'button-orange');
  watchedBtn.classList.add('button-active');
  // watchedBtn.setAttribute("disabled", "true");
}

export { createMarkup };
