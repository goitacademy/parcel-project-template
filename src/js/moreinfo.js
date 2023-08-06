import refs from './ref';
import * as api from './api';

let moreInfoData = {};

// Rendering more info
const renderMoreInfo = target => {
  moreInfoData = api.dataProcessingMoreInfo();

  refs.part6.classList.remove('hidden');
  const day = Number(target.dataset.day);

  const moreDaysListItem = document.querySelectorAll('.timeWeather');
  if (moreDaysListItem) {
    moreDaysListItem.forEach(e => e.remove());
  }

  const currentMoreInfo = moreInfoData.find(e => e.DayNum == day);

  const moreInfoBlock = refs.moreInfoBlock;
  moreInfoBlock.innerHTML = ''; // Clear the content before rendering

  const currentMoreInfoArray = Object.values(currentMoreInfo.forecast);

  currentMoreInfoArray.forEach(item => {
    const listItem = document.createElement('li');
    listItem.classList.add('timeWeather');

    const timeElement = document.createElement('p');
    timeElement.classList.add('timeWeather__time');
    timeElement.textContent = item.time;

    const tempElement = document.createElement('p');
    tempElement.classList.add('timeWeather__temp');

    const tempIcon = document.createElement('img');
    tempIcon.src = item.icon;
    tempIcon.alt = item.iconDescription;
    tempIcon.classList.add('timeWeather__temp-icon');

    const tempSpan = document.createElement('span');
    tempSpan.textContent = `${item.temp} °`;

    tempElement.appendChild(tempIcon);
    tempElement.appendChild(tempSpan);

    const dataElement = document.createElement('ul');
    dataElement.classList.add('timeWeather__data');

    const pressureLi = document.createElement('li');
    pressureLi.classList.add('timeWeather__pressure');
    pressureLi.textContent = `${item.pressure} mm`;

    const humidityLi = document.createElement('li');
    humidityLi.classList.add('timeWeather__humidity');
    humidityLi.textContent = `${item.humidity}%`;

    const windLi = document.createElement('li');
    windLi.classList.add('timeWeather__wind');
    windLi.textContent = `${item.speed} m/s`;

    dataElement.appendChild(pressureLi);
    dataElement.appendChild(humidityLi);
    dataElement.appendChild(windLi);

    listItem.appendChild(timeElement);
    listItem.appendChild(tempElement);
    listItem.appendChild(dataElement);

    moreInfoBlock.appendChild(listItem); // Append each forecast item directly to moreInfoBlock
  });
};

// We're listening to the more info button
refs.daysFiveListblock.addEventListener('click', handleBtnMIClick);

function handleBtnMIClick(event) {
  event.preventDefault();
  const target = event.target;
  if (target.nodeName === 'BUTTON') {
    renderMoreInfo(target);
  }
}
