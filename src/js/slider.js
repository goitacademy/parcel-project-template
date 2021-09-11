import Glide from '@glidejs/glide';
import { apiService } from '../index';
import sliderTpl from '../templates/sliderTpl.hbs';
import getRefs from './get-refs';
const refs = getRefs();

apiService.getTopMovies().then(renderSliderMarkup);

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

glide.mount();

function renderSliderMarkup(articles) {
  refs.slider.innerHTML = sliderTpl(articles);
}
