import refs from '../refs';

export default function infoMsg() {
  refs.moviesContainer.innerHTML =
    '<li class="info-msg">Вы еще не добавили фильмы в свою библиотеку.</li>';
}
