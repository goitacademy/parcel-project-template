// $('.slider').slick({
//   infinite: false,
//   speed: 600,
//   slidesToShow: 4,
//   slidesToScroll: 1,
//   centerMode: true,
//   autoplay: true,
//   swipeToSlide: true,
//   initialSlide: 2,
// });

// GlideSlider
// import Glide from '@glidejs/glide';
import { apiService } from '../index';
import sliderTpl from '../templates/sliderTpl.hbs';
import getRefs from './get-refs';
const refs = getRefs();

apiService.getTopMovies().then(renderSliderMarkup);
$('.slider').slick({
  infinite: false,
  speed: 600,
  slidesToShow: 4,
  slidesToScroll: 1,
  centerMode: true,
  autoplay: true,
  swipeToSlide: true,
  initialSlide: 2,
});

// getTrendy();

// const glide = new Glide('.slider', {
//   type: 'slider',
//   startAt: 0,
//   perView: 8,
//   autoplay: 2000,
//   hoverpause: true,
//   bound: true,
// });

// glide.mount();

// function getTrendy() {
//   const url = `https://api.themoviedb.org/3/trending/all/day?api_key=d91911ebb88751cf9e5c4b8fdf4412c9`;
//   return fetch(url)
//     .then(response => response.json())
//     .then(({ results }) => {
//       return results;
//     })
//     .then(renderSlider)
//     .catch(err => {
//       err;
//       refs.slider.innerHTML = `<img class="catch-error-pagination" src="${errorUrl}" />`;
//     });
// }

function renderSliderMarkup(articles) {
  refs.slider.innerHTML = sliderTpl(articles);
}
