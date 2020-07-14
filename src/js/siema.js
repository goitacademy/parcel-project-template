import Siema from 'siema';
const mySiema = new Siema();

const refs = {
  indicators: Array.from(document.querySelectorAll('.image-identify')),
};

const findActiveIndex = () =>
  refs.indicators.findIndex(elem => elem.classList.contains('is-check'));

document.querySelector('.prev').addEventListener('click', () => {
  mySiema.prev();

  const prevElemIndex = findActiveIndex();

  if (prevElemIndex === 0) {
    return;
  }

  refs.indicators[prevElemIndex].classList.remove('is-check');
  refs.indicators[prevElemIndex - 1].classList.add('is-check');
});

document.querySelector('.next').addEventListener('click', () => {
  mySiema.next();

  const prevElemIndex = findActiveIndex();

  if (prevElemIndex === refs.indicators.length - 1) {
    return;
  }

  refs.indicators[prevElemIndex].classList.remove('is-check');
  refs.indicators[prevElemIndex + 1].classList.add('is-check');
});
