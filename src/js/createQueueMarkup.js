import createWatchedMarkup from './createWatchedMarkup';
const watchedArr = JSON.parse(localStorage.getItem('Queue'));
export default function createQueueMarkup() {
  createWatchedMarkup();
}
