'use strict';
import {
  sunriseSvg,
  sunsetSvg,
  updateClock,
  rain,
  rainNight,
} from './utilsforCurrentDay';
import {
  snowSvg,
  sunSvg,
  cloudsAndSunSvg,
  cloudySvg,
} from '../../utilsForFiveDays';

const todayData = null;
const currentTemperature = document.querySelector('.current-temperature');
const degreesMin = document.querySelector('.degrees-min');
const degreesMax = document.querySelector('.degrees-max');
const weather = document.querySelector('.weather');
const dateInfo = document.querySelector('.date-info__date');
const currentMonth = document.querySelector('.time__month');
const currendTime = document.querySelector('time__hour');
const sunset = document.getElementById('sunset');
const sunrise = document.getElementById('sunrise');
const sunDetails = document.querySelector('.sun-details');
const sunLine = document.querySelector('.line-sun');

const weatherInfo = document.querySelector('.weather-info__weather');

const weatherType = document.createElement('div');
weatherType.innerHTML = `<svg class="sun-svg" width="35" height="35" viewBox="0 0 32 32">${cloudySvg}</svg>`;

weatherInfo.prepend(weatherType);

const sunsetSvgElement = document.createElement('div');
sunsetSvgElement.innerHTML = `<svg class="sun-svg" width="20" height="20" class="card__icon" viewBox="0 0 32 32">${sunsetSvg}</svg>`;

const sunriseSvgElement = document.createElement('div');
sunriseSvgElement.innerHTML = `<svg class="sun-svg" width="20" height="20" viewBox="0 0 32 32">${sunriseSvg}</svg>`;

sunDetails.prepend(sunriseSvgElement);
sunLine.prepend(sunsetSvgElement);
const baseUrlForTodayWeather =
  'https://api.openweathermap.org/data/2.5/weather?APPID=072ec51636e5141423703ba32d12100f&units=metric&lang=en&q=';
const APIKEY = '072ec51636e5141423703ba32d12100f';

const makeUrlForDetectedCityFromCurrentCoord = (latitude, longitude) => {
  return `https://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&appid=${APIKEY}`;
};

const weatherData = {
  city: 'Bucharest',
  currentTemp: '',
  todayMax: '',
  todayMin: '',
  sunRise: '',
  sunSunset: '',
  currentDay: '',
  currentMonth: '',
  currentDayNumber: '',
  icon: '',
};

//Functie care afla data curenta
const formatDate = () => {
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'Octomber',
    'November',
    'December',
  ];
  const currentDate = new Date();
  weatherData.currentDayNumber = currentDate.getDate();
  const currentDayOfWeek = dayNames[currentDate.getDay()];
  const currentMonth = monthNames[currentDate.getMonth()];

  weatherData.currentDay = currentDayOfWeek;
  weatherData.currentMonth = currentMonth;
};

formatDate();
setInterval(updateClock, 1000);

//Functie care afla locatia
function getCurrentLocationCoord() {
  if ('geolocation' in navigator) {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    })
      .then(location => {
        const url = makeUrlForDetectedCityFromCurrentCoord(
          location.coords.latitude,
          location.coords.longitude
        );
        return fetch(url);
      })
      .then(response => response.json())
      .then(data => {
        weatherData.city = data[0].name;
      })
      .catch(err => {
        throw err;
      });
  } else {
    return Promise.reject('Geolocația nu este suportată de acest browser.');
  }
}

//Functie care preia datele despre vreme
function getWeatherForToday() {
  return fetch(baseUrlForTodayWeather + weatherData.city)
    .then(res => {
      if (res.status === 404) {
        PNotify.error({
          title: 'NOTICE!',
          text: "The city can't be found!",
        });
        throw new Error('City not found');
      }
      return res.json();
    })
    .then(data => {
      weatherData.currentTemp = Math.round(data.main.temp);
      weatherData.todayMax = Math.round(data.main.temp_max);
      weatherData.todayMin = Math.round(data.main.temp_min);
      weatherData.sunRise = decodeTime(data.sys.sunrise);
      weatherData.sunSunset = decodeTime(data.sys.sunset);
      weatherData.icon = data.weather[0].icon;
    })
    .catch(err => {
      console.error(`Request error: ${err.message}`);
    });
}

function decodeTime(time) {
  const date = new Date(time * 1000);

  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  return `${hours}:${minutes}`;
}

const DayContent = `
<h3 class="white-text">${weatherData.currentDayNumber}<sup class="exponent">th</sup> ${weatherData.currentDay}</h3>
`;

//Functie care afiseaza datele in DOM
function renderWeatherDataForToday() {
  currentTemperature.textContent = weatherData.currentTemp;
  degreesMin.textContent = weatherData.todayMin;
  degreesMax.textContent = weatherData.todayMax;
  dateInfo.innerHTML = DayContent;
  sunrise.innerHTML = weatherData.sunRise;
  sunset.innerHTML = weatherData.sunSunset;
  currentMonth.innerHTML = weatherData.currentMonth;

  if (weatherData.icon === '01d' || weatherData.icon === '01n') {
    weatherType.innerHTML = `<svg width="35" height="35" viewBox="0 0 32 32">${sunSvg}</svg>`;

    weatherInfo.prepend(weatherType);
  } else if (weatherData.icon === '02d') {
    weatherType.innerHTML = `<svg  width="35" height="35" viewBox="0 0 32 32">${cloudsAndSunSvg}</svg>`;

    weatherInfo.prepend(weatherType);
  } else if (weatherData.icon === '03d') {
    weatherType.innerHTML = `<svg  width="35" height="35" viewBox="0 0 32 32">${cloudySvg}</svg>`;

    weatherInfo.prepend(weatherType);
  } else if (weatherData.icon === '13d') {
    weatherType.innerHTML = `<svg width="35" height="35" viewBox="0 0 32 32">${snowSvg}</svg>`;

    weatherInfo.prepend(weatherType);
  } else if (weatherData.icon === '10d') {
    weatherType.innerHTML = `<svg width="35" height="35" viewBox="0 0 32 32">${rain}</svg>`;

    weatherInfo.prepend(weatherType);
  } else if (weatherData.icon === '10n') {
    weatherType.innerHTML = `<svg width="35" height="35" viewBox="0 0 32 32">${rainNight}</svg>`;

    weatherInfo.prepend(weatherType);
  }
}
async function getWeather() {
  await getCurrentLocationCoord();
  const data = await getWeatherForToday();

  renderWeatherDataForToday();
}

getWeather();
