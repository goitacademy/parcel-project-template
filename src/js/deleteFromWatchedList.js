import createWatchedMarkup from './createWatchedMarkup.js';

export default function deleteFromWathedList(evt) {
  let watchedArr = JSON.parse(localStorage.getItem('Watched'));
  if (!evt.target.classList.contains('delete-btn')) {
    return;
  }
  const targetMovieID = evt.path[1].children[1].firstElementChild.dataset.source;

  if (watchedArr.includes(targetMovieID)) {
    const i = watchedArr.indexOf(targetMovieID);
    if (i >= 0) {
      watchedArr.splice(i, 1);
      localStorage.setItem('Watched', JSON.stringify(watchedArr));
      createWatchedMarkup();
    }
  }
}
