// получить ссылки на кнопки
const libraryButtons = document.querySelectorAll('.btn-library');

// сделать активной кнопки WATCHED или QUEUE в My library
libraryButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    libraryButtons.forEach(btn => {
      btn.classList.remove('btn--active');
    });
    btn.classList.add('btn--active');
  });
});
