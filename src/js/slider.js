import Glide from '@glidejs/glide';
import sliderTpl from '../templates/sliderTpl.hbs';
import getRefs from './get-refs';
import { fetchMovies, modal } from './modal';
import changeMarkup from './changeMarkup.js';

const refs = getRefs();
const glide = new Glide('.slider', {
  type: 'slider',
  rewind: true,
  startAt: 0,
  perView: 6.8,
  autoplay: 2000,
  hoverpause: true,
  bound: true,
  gap: 0,
  perTouch: 5,
  dragThreshold: 80,
  swipeThreshold: 40,
});

getTopMovies();
glide.mount();

function getTopMovies() {
  const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=0e03d2359202713e59ab7c25960ab620&language=en-US&page=1`;
  return fetch(url)
    .then(response => response.json())
    .then(({ results }) => {
      return results;
    })
    .then(renderSliderMarkup)
    .catch(err => err);
}

function renderSliderMarkup(articles) {
  refs.slider.innerHTML = sliderTpl(articles);
  document.querySelector('.glide__slides').addEventListener('click', openModalSlider);
}

let idQuery = '';

function openModalSlider(e) {
  e.preventDefault();
  document.onkeydown = e => {
    if (e.code === 'Escape') {
      modal.close();
      changeMarkup();
    }
  };
  if (!e.target.classList.contains('slider__image')) {
    return;
  }
  idQuery = e.target.dataset.source;
  fetchMovies(idQuery);
  modal.show();
}
