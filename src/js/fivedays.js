// Import the 'refs' object from the 'ref.js' module, containing references to DOM elements
import refs from './ref';

// Import the 'getFiveDayData' function from the 'api.js' module to retrieve weather data
import { getFiveDayData } from './api';

// Initialize an empty object to store five-day weather data
let fiveDayData = {};

// Function to render and display weather data for the next five days
const renderFiveDaysWeather = data => {
  // Store the retrieved data in the 'fiveDayData' variable
  fiveDayData = data;

  // Check if the '.weather' element exists in the DOM
  if (document.querySelector('.weather')) {
    // Hide the 'todayContainer' and show the 'fiveDaysContainer'
    refs.todayContainer.classList.add('hidden');
    refs.fiveDaysContainer.classList.remove('hidden');

    // Update city names in the UI
    refs.part2City.textContent =
      fiveDayData.city.name + ', ' + fiveDayData.city.country;
    refs.fiveDaysContaineerCityName.textContent =
      fiveDayData.city.name + ', ' + fiveDayData.city.country;
  }

  // Remove any existing day list items from the DOM
  const daysListItem = document.querySelectorAll('.days-list__item');
  if (daysListItem) {
    daysListItem.forEach(e => e.remove());
  }

  // Clear the innerHTML of the 'daysFiveListblock' element
  const daysFiveListblock = refs.daysFiveListblock;
  daysFiveListblock.innerHTML = '';

  data.list.forEach(item => {
    const listItem = document.createElement('li');
    listItem.className = 'days-list__item';

    const dayOfWeek = document.createElement('h3');
    dayOfWeek.className = 'days-list__day-of-the-week';
    dayOfWeek.textContent = item.Day;

    const date = document.createElement('h4');
    date.className = 'days-list__date';
    date.textContent = item.DayNum + ' ' + item.Month;

    const img = document.createElement('img');
    img.className = 'days-list__img';
    img.src = item.icon.icon;
    img.alt = item.icon.iconDescription;

    const tempMin = document.createElement('p');
    tempMin.className = 'days-list__value days-list__value--degrees';
    tempMin.textContent = item.temp.TempMin;

    const tempMax = document.createElement('p');
    tempMax.className = 'days-list__value days-list__value--degrees';
    tempMax.textContent = item.temp.TempMax;

    const minMaxDiv = document.createElement('div');
    minMaxDiv.className = 'days-list__min-max';
    minMaxDiv.appendChild(tempMin);
    minMaxDiv.appendChild(tempMax);

    const temperatureBlock = document.createElement('div');
    temperatureBlock.className = 'days-list__temperature-block';
    temperatureBlock.appendChild(minMaxDiv);

    const moreBtn = document.createElement('button');
    moreBtn.className = 'days-list__more-btn';
    moreBtn.type = 'button';
    moreBtn.setAttribute('data-day', item.DayNum);
    moreBtn.textContent = 'more info';

    listItem.appendChild(dayOfWeek);
    listItem.appendChild(date);
    listItem.appendChild(img);
    listItem.appendChild(temperatureBlock);
    listItem.appendChild(moreBtn);

    daysFiveListblock.appendChild(listItem);
  });
};

refs.btnFiveDays[0].addEventListener('click', () => {
  getFiveDayData().then(data => {
    renderFiveDaysWeather(data);
    refs.todayContainer.classList.add('hidden');
    refs.timesectionEl.classList.add('hidden');
    refs.containerquotesEl.classList.add('hidden');
    refs.fiveDaysContainer.classList.remove('hidden');
    refs.chartContainer.classList.remove('hidden');
  });
});

refs.btnFiveDays[1].addEventListener('click', () => {
  getFiveDayData().then(data => {
    renderFiveDaysWeather(data);
    refs.todayContainer.classList.add('hidden');
    refs.timesectionEl.classList.add('hidden');
    refs.containerquotesEl.classList.add('hidden');
    refs.fiveDaysContainer.classList.remove('hidden');
    refs.chartContainer.classList.remove('hidden');
  });
});

refs.btnToday[0].addEventListener('click', () => {
  refs.todayContainer.classList.remove('hidden');
  refs.timesectionEl.classList.remove('hidden');
  refs.containerquotesEl.classList.remove('hidden');
  refs.fiveDaysContainer.classList.add('hidden');
  refs.chartContainer.classList.add('hidden');
});

refs.btnToday[1].addEventListener('click', () => {
  refs.todayContainer.classList.remove('hidden');
  refs.timesectionEl.classList.remove('hidden');
  refs.containerquotesEl.classList.remove('hidden');
  refs.fiveDaysContainer.classList.add('hidden');
  refs.chartContainer.classList.add('hidden');
});
// In summary, this module handles the rendering and display of upcoming five - day weather data, updates the UI to reflect user interactions,
// and seamlessly switches between five - day and today's weather views based on button clicks.
// It makes the weather forecast application more interactive and informative for users.
