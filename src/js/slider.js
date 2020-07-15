// slider = document.querySelector('.hero-container'), // основный элемент блока

const sliderItems = document.querySelectorAll('.slider-item'), // коллекция .slider-item
  sliderControl = document.querySelector('.slider-control'), // блок елементов управления
  sliderButtons = document.querySelectorAll('.slider-control-button'), // элементы управления
  sliderButtonPrev = document.querySelector('.btn-prev'), // элемент управления 'Назад'
  sliderButtonNext = document.querySelector('.btn-next'), // элемент управления 'Вперед'
  indicatorItems = document.querySelectorAll('.slider-nav-button'); // элементы управления

let index = 0;

const activeSlide = n => {
  for (slide of sliderItems) {
    slide.classList.remove('active');
  }
  sliderItems[n].classList.add('active');
};

const currentIndicator = n => {
  for (indicator of indicatorItems) {
    indicator.classList.remove('current');
  }
  indicatorItems[n].classList.add('current');
};

const prepareCurrentSlide = ind => {
  activeSlide(ind);
  currentIndicator(ind);
};

//функция переключение на следующий слайд
const nextSlide = () => {
  if (index == sliderItems.length - 1) {
    index = 0;
    prepareCurrentSlide(index);
  } else {
    index++;
    prepareCurrentSlide(index);
  }
};

//функция переключение на предыдущий слайд
const prevSlide = () => {
  if (index == 0) {
    index = sliderItems.length - 1;
    prepareCurrentSlide(index);
  } else {
    index--;
    prepareCurrentSlide(index);
  }
};

indicatorItems.forEach((item, indexIndicator) => {
  item.addEventListener('click', () => {
    index = indexIndicator;
    prepareCurrentSlide(index);
  });
});

sliderControl.addEventListener('click', function (e) {
  const target = e.target;
  Array.from(sliderButtons).forEach(item => {
    item.classList.remove('current');
  });
  target.classList.add('current');
});

sliderButtonNext.addEventListener('click', nextSlide);
sliderButtonPrev.addEventListener('click', prevSlide);

const interval = setInterval(nextSlide, 5000);
