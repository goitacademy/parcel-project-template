let mask = document.querySelector('.mask');

window.addEventListener('load', () => {
  mask.classList.add('hide');
  setTimeout(() => {
    mask.style.display = 'none';
  }, 600);
});
