import { idQuery } from './modal';
let watched = [];

export default function addToWatched() {
  if (watched.includes(idQuery)) {
    return;
  }
  localStorage.setItem('Watched', watched.push(idQuery));
}
