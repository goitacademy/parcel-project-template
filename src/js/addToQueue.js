import { idQuery } from './modal';
let queue = [];

export default function addToQueue() {
  if (queue.includes(idQuery)) {
    return;
  }
  localStorage.setItem('Queue', queue.push(idQuery));
}
