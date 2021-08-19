import movieTemplate from '../templates/movie-card.hbs';

// ========== функция отрисовки вкладки QUEUE ==========
export default function queueMovies(arrFromLocalStorage) {
  // контейнер для фильмов из queue
  const queueGalleryList = document.querySelector('.queue-gallery');

  // выводим сообщение, если в библиотеке нет фильмов
  if (!arrFromLocalStorage.length) {
    queueGalleryList.innerHTML = `<div style="display: block; width: 100%; min-height: 50px;">Список фильмов для просмотра пуст...</div>`;
    return;
  }
  // если есть фильмы, создаём и рендерим разметку

  const ArrayForRendering = arrFromLocalStorage.map(el => Object.values(el));
  const queueMarkup = ArrayForRendering.flat()
    .map(el => movieTemplate(el))
    .join('');
  queueGalleryList.innerHTML = queueMarkup;
}
