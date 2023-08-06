//Slider
import refs from './ref';
const cityContainer = document.querySelector('.slider');

const createCityElement = (id, name) => {
  let cityDiv = document.createElement('div');
  cityDiv.className = 'slide';
  cityDiv.dataset.id = id;
  const cityName = document.createElement('h2');
  cityName.className = 'city-name';
  const cityCloseBtn = document.createElement('button');
  cityCloseBtn.className = 'city-close-btn';
  cityCloseBtn.innerText = 'x';
  cityName.innerText = name;
  cityDiv.append(cityName, cityCloseBtn);
  cityContainer.appendChild(cityDiv);
};

refs.form.addEventListener('submit', function (event) {
  event.preventDefault();
  refs.todayContainer.classList.remove('isHiden');
  refs.timesectionEl.classList.remove('isHiden');
  refs.containerquotesEl.classList.remove('isHiden');
  refs.fiveDaysContainer.classList.add('isHiden');
  refs.chartContainer.classList.add('hidden');
});
refs.sliderEl.addEventListener('click', function () {
  refs.todayContainer.classList.remove('isHiden');
  refs.timesectionEl.classList.remove('isHiden');
  refs.containerquotesEl.classList.remove('isHiden');
  refs.fiveDaysContainer.classList.add('isHiden');
  refs.chartContainer.classList.add('hidden');
});

export { createCityElement };
