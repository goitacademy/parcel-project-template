import movieTemplate from '../templates/movie-card.hbs';

// ========== функция отрисовки вкладки QUEUE ==========
export default function queueMovies(arrFromLocalStorage) {
  // контейнер для фильмов из queue
  const queueGalleryList = document.querySelector('.queue-gallery');

  const ArrayForRendering = arrFromLocalStorage.map(el => Object.values(el));
  // выводим сообщение, если в библиотеке нет фильмов
  if (!ArrayForRendering.length) {
    queueGalleryList.innerHTML = `<div style="display: block; width: 100%; min-height: 50px;">Список просмотренных фильмов пуст...</div>`;
    return;
  }
  // если есть фильмы, создаём и рендерим разметку
  const queueMarkup = ArrayForRendering.flat()
    .map(el => movieTemplate(el))
    .join('');
  queueGalleryList.innerHTML = queueMarkup;
}
