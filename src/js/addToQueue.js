import { idQuery } from './modal';
import toggleBtn from './toggleBtn.js';
let queueArr = [];

export default function addToQueue(event) {
  let eventBtn = event.target
  // console.log('event from add',eventBtn);
  // if (queueArr.includes(idQuery)) {
  //   return;
  // }
  let filmsIdInLocalStorage = JSON.parse(localStorage.getItem('Queue'));
  if (filmsIdInLocalStorage !== []) {
    queueArr = filmsIdInLocalStorage;
  }
  if (filmsIdInLocalStorage === null) {
    filmsIdInLocalStorage = [];
    queueArr = filmsIdInLocalStorage;
  }
  if (filmsIdInLocalStorage.includes(idQuery)) {
    return;
  }
  
  queueArr.push(idQuery);
  localStorage.setItem('Queue', JSON.stringify(queueArr));
  toggleBtn(eventBtn);
}
