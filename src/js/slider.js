import Glide from '@glidejs/glide';
import * as basicLightbox from './basicLightbox.min.js';
import sliderTpl from '../templates/sliderTpl.hbs';
import getRefs from './get-refs';
import { fetchMovies, bodyClassToggle } from './modal';

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
  perTouch: 3,
});

getTopMovies();
glide.mount();

function getTopMovies() {
  const url = `https://api.themoviedb.org/3/trending/all/day?api_key=0e03d2359202713e59ab7c25960ab620`;
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

const modal = basicLightbox.create('<div class="modal js-modal"></div>');
let idQuery = '';

function openModalSlider(e) {
  e.preventDefault();
  document.onkeydown = e => {
    if (e.code === 'Escape') {
      modal.close();
    }
  };
  if (!e.target.classList.contains('slider__image')) {
    return;
  }
  idQuery = e.target.dataset.source;
  fetchMovies(idQuery);
  modal.show();
}
