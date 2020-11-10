import "./sass/main.scss";
import Siema from 'siema';
import subscribe from './js/subscribe'
import svguse from './js/svgxuse'
import menu from './js/menu'

const mySiema = new Siema({
  selector: '.siema',
  duration: 500,
  easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
  perPage: 1,
  startIndex: 0,
  draggable: true,
  multipleDrag: true,
  threshold: 20,
  loop: true,
  rtl: false,
  onInit: () => {},
  onChange: () => {},
});


setInterval(() => mySiema.next(), 5000);
document.querySelector('.prev').addEventListener('click', () => mySiema.prev());
document.querySelector('.next').addEventListener('click', () => mySiema.next());

svguse()

