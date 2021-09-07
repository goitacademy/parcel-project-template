import { idQuery } from './modal';
let queueArr = [];

export default function addToQueue() {
  if (queueArr.includes(idQuery)) {
    return;
  }
  queueArr.push(idQuery);
  localStorage.setItem('Queue', JSON.stringify(queueArr));
}
