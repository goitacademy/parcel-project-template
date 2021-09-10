import createQueueMarkup from './createQueueMarkup.js';

export default function deleteFromQueueList(evt) {
  let queueArr = JSON.parse(localStorage.getItem('Queue'));
  if (!evt.target.classList.contains('delete-btn')) {
    return;
  }
  const targetMovieID = evt.path[1].children[1].firstElementChild.dataset.source;

  if (queueArr.includes(targetMovieID)) {
    const i = queueArr.indexOf(targetMovieID);
    if (i >= 0) {
      queueArr.splice(i, 1);
      localStorage.setItem('Queue', JSON.stringify(queueArr));
      createQueueMarkup();
    }
  }
}
