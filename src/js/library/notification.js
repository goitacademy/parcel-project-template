import refs from '../refs';
let nameList = '';
export default function infoMsg(page) {
  if (page === 'WatchedList') nameList = 'watched';
  else nameList = 'queue';
  refs.moviesContainer.innerHTML = `<li class="info-msg"><img src="https://chance2.ru/photo/img/vzgliad-kota-iz-shreka-foto-3.jpg" alt="Cat">Please add a film in ${nameList}.</li>`;
}
