export default function modalWindow() {
  const movieCards = document.querySelectorAll('[data-id]');
  const modalW = document.querySelector('.js-modal');
  const closeBtn = document.querySelector('button[data-action="close-modal"]');
  const overlay = document.querySelector('.modal__overlay');

  // добавляет слушатель клика по карточке фильма
  movieCards.forEach(movie => {
    movie.addEventListener('click', onMovieClick);
  });

  // обработчик клика по карточке фильма
  function onMovieClick(event) {
    event.preventDefault();

    console.log(event.currentTarget.dataset.id);
    // открытие модалки при клике по элементу галереи
    modalOpen();
  }

  // реализация функции открытия модалки при клике по карточке фильма
  function modalOpen() {
    modalW.classList.add('is-open');
    // document.body.classList.add('is-blocked'); // убирает скролл при открытой модалке

    //слушатели для закрытия модалки
    closeBtn.addEventListener('click', modalClose);
    window.addEventListener('keydown', onKeyPress);
    overlay.addEventListener('click', onOverlayClick);
  }

  // реализация закрытия модального окна
  function modalClose() {
    modalW.classList.remove('is-open');
    // document.body.classList.remove('is-blocked');

    //снимаем слушатели закрытия модалки
    closeBtn.removeEventListener('click', modalClose);
    window.removeEventListener('keydown', onKeyPress);
    overlay.removeEventListener('click', onOverlayClick);
  }

  // обработчик для реализации закрытия модалки при нажатии клавиши ESC
  // и пролистывания изображений галереи в открытом модальном окне клавишами "влево" и "вправо".
  function onKeyPress(e) {
    if (e.code === 'Escape') {
      modalClose();
    }
  }

  // обработчик для реализации закрытия модалки при клике на overlay
  function onOverlayClick(e) {
    if (e.currentTarget !== e.target) {
      return;
    }
    modalClose();
  }
}

// modalWindow();
