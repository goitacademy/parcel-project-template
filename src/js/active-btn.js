// сделать активной кнопки WATCHED и QUEUE в My library

const libraryButtons = document.querySelectorAll('.btn-library');
const modalButtons = document.querySelectorAll('.btn-in-modal');

libraryButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    libraryButtons.forEach(btn => {
      btn.classList.remove('btn--active');
    });
    btn.classList.add('btn--active');
  });
});

modalButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    modalButtons.forEach(btn => {
      btn.classList.remove('btn--active');
    });
    btn.classList.add('btn--active');
  });
});
