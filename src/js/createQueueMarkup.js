import { apiService } from '../index';
import { createMarkup } from './createWatchedMarkup';

import getRefs from './get-refs';
const refs = getRefs();

export default async function createQueueMarkup() {
  let dataArr = [];
  const queueArr = JSON.parse(localStorage.getItem('Queue'));
  if (queueArr === null) {
    refs.movies.innerHTML = '';
    return;
  } else {
    for (let i = 0; i < queueArr.length; i++) {
      const data = await apiService.getMovieByID(queueArr[i]);
      dataArr.push(data);
    }
    createMarkup(dataArr);
  }
}
