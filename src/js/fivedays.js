import refs from './ref';
import { getFiveDayData } from './api';
let fiveDayData = {};

const renderFiveDaysWeather = data => {
  fiveDayData = data;
  if (document.querySelector('.temperature-box')) {
    document.querySelector('.temperature-box').remove();
    refs.todayContainer.classList.add('isHiden');
    refs.fiveDaysContainer.classList.remove('isHiden');
    refs.part2City.textContent =
      fiveDayData.city.name + ', ' + fiveDayData.city.country;
    refs.fiveDaysContaineerCityName.textContent =
      fiveDayData.city.name + ', ' + fiveDayData.city.country;
  }
  const daysListBlock = document.querySelector('.days-list');
  if (daysListBlock) {
    daysListBlock.innerHTML = ''; // Clear the existing list items
  }
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

    daysListBlock.appendChild(listItem);
  });
};

const handleFiveDaysButtonClick = async () => {
  const cityName = 'Kyiv';
  try {
    const fiveDayData = await getFiveDayData(cityName);
    renderFiveDaysWeather(fiveDayData);
    refs.fiveDaysContainer.classList.remove('isHiden');
  } catch (error) {
    console.error('Error fetching five-day data:', error);
  }
};

refs.fiveDaysButton.addEventListener('click', handleFiveDaysButtonClick);

// refs.btnFiveDays[0].addEventListener('click', handleFiveDaysButtonClick);
// refs.btnFiveDays[1].addEventListener('click', handleFiveDaysButtonClick);
