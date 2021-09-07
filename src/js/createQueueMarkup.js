import { apiService } from '../index';
import { createMarkup } from './createWatchedMarkup';

export default async function createQueueMarkup() {
  let dataArr = [];
  const queueArr = JSON.parse(localStorage.getItem('Queue'));
  for (let i = 0; i < queueArr.length; i++) {
    const data = await apiService.getMovieByID(queueArr[i]);
    dataArr.push(data);
  }
  createMarkup(dataArr);
}
