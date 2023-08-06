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
  refs.todayContainer.classList.remove('hidden');
  refs.timesectionEl.classList.remove('hidden');
  refs.containerquotesEl.classList.remove('hidden');
  refs.fiveDaysContainer.classList.add('hidden');
  refs.chartContainer.classList.add('hidden');
});
refs.sliderEl.addEventListener('click', function () {
  refs.todayContainer.classList.remove('hidden');
  refs.timesectionEl.classList.remove('hidden');
  refs.containerquotesEl.classList.remove('hidden');
  refs.fiveDaysContainer.classList.add('hidden');
  refs.chartContainer.classList.add('hidden');
});

export { createCityElement };
