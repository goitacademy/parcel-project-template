// получить ссылки на кнопки
const libraryButtons = document.querySelectorAll('.btn-library');
const modalButtons = document.querySelectorAll('.btn-in-modal');

// сделать активной кнопки WATCHED или QUEUE в My library
libraryButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    libraryButtons.forEach(btn => {
      btn.classList.remove('btn--active');
    });
    btn.classList.add('btn--active');
  });
});

// сделать активной кнопки ADD TO WATCHED или ADD TO QUEUE в модалке
modalButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    modalButtons.forEach(btn => {
      btn.classList.remove('btn--active');
    });
    btn.classList.add('btn--active');
  });
});
