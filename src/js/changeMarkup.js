import createWatchedMarkup from './createWatchedMarkup.js';
import createQueueMarkup from './createQueueMarkup.js';

export default function changeMarkup() {
  if (!document.querySelector('.storage-button')) {
    return;
  }
  const watchedBtn = document.getElementById('watched');
  const queueBtn = document.getElementById('queue');

  if (watchedBtn.classList.contains('button-active')) {
    createWatchedMarkup();
  } else {
    createQueueMarkup();
  }
}
