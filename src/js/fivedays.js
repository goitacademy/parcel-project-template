import refs from './ref';
import { getFiveDayData } from './api';
let fiveDayData = {};

const renderFiveDaysWeather = data => {
  console.log('Rendering five days weather data:', data);

  fiveDayData = data;
  if (document.querySelector('.weather')) {
    refs.todayContainer.classList.add('isHiden');
    refs.fiveDaysContainer.classList.remove('isHiden');
    refs.part2City.textContent =
      fiveDayData.city.name + ', ' + fiveDayData.city.country;
    refs.fiveDaysContaineerCityName.textContent =
      fiveDayData.city.name + ', ' + fiveDayData.city.country;
  }
  const daysListItem = document.querySelectorAll('.days-list__item');
  if (daysListItem) {
    daysListItem.forEach(e => e.remove());
    console.log('Removed existing moreDaysListItem');
  }

  const daysFiveListblock = refs.daysFiveListblock;
  daysFiveListblock.innerHTML = ''; // Clear the content before rendering

  data.list.forEach(item => {
    console.log('Processing item:', item);

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
    console.log('Item processed:', item);
  });

  console.log('Five days weather rendering complete.');
};

refs.btnFiveDays[0].addEventListener('click', () => {
  getFiveDayData().then(data => {
    renderFiveDaysWeather(data);
    refs.todayContainer.classList.add('isHiden');
    refs.timesectionEl.classList.add('isHiden');
    refs.containerquotesEl.classList.add('isHiden');
    refs.fiveDaysContainer.classList.remove('isHiden');
    refs.chartContainer.classList.remove('hidden');
  });
});

refs.btnFiveDays[1].addEventListener('click', () => {
  getFiveDayData().then(data => {
    renderFiveDaysWeather(data);
    refs.todayContainer.classList.add('isHiden');
    refs.timesectionEl.classList.add('isHiden');
    refs.containerquotesEl.classList.add('isHiden');
    refs.fiveDaysContainer.classList.remove('isHiden');
    refs.chartContainer.classList.remove('hidden');
  });
});

refs.btnToday[0].addEventListener('click', () => {
  refs.todayContainer.classList.remove('isHiden');
  refs.timesectionEl.classList.remove('isHiden');
  refs.containerquotesEl.classList.remove('isHiden');
  refs.fiveDaysContainer.classList.add('isHiden');
  refs.chartContainer.classList.add('hidden');
});

refs.btnToday[1].addEventListener('click', () => {
  refs.todayContainer.classList.remove('isHiden');
  refs.timesectionEl.classList.remove('isHiden');
  refs.containerquotesEl.classList.remove('isHiden');
  refs.fiveDaysContainer.classList.add('isHiden');
  refs.chartContainer.classList.add('hidden');
});
