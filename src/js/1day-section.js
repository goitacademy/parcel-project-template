import { fetchCurrentWeather } from './api.js';

const city = '';
const temperatureElement = document.querySelector('.today-weather__current');
const minTemperatureElement = document.querySelector(
  '.today-minmax__mindegree'
);
const maxTemperatureElement = document.querySelector(
  '.today-minmax__maxdegree'
);
const weatherIconElement = document.querySelector('.current-wheather-icon');
const cityElement = document.querySelector('.current-wheather-city');
const fiveDaysSection = document.querySelector('.five-days');
const todaySection = document.querySelector('.allday-wheather');
const buttonList = document.querySelector('.button-list');
const btnShowChart = document.querySelector('.show-chart');
const quote = document.querySelector('.quote');
const cityStyle = document.querySelector('.city');
const chartSection = document.querySelector('.chart');

function roundToInteger(number) {
  return parseInt(number, 10);
}
function updateWeatherData(data) {
  const currentTemperature = roundToInteger(data.main.temp);
  const minTemperature = roundToInteger(data.main.temp_min);
  const maxTemperature = roundToInteger(data.main.temp_max);
  const weatherIcon = data.weather[0].icon;
  const cityName = data.name;

  temperatureElement.textContent = `${currentTemperature}°`;
  minTemperatureElement.textContent = `${minTemperature}°`;
  maxTemperatureElement.textContent = `${maxTemperature}°`;

  if (weatherIconElement) {
    const iconUrl = `https://openweathermap.org/img/w/${weatherIcon}.png`;
    weatherIconElement.setAttribute('src', iconUrl);
  }

  if (cityElement) {
    cityElement.textContent = cityName;
  }
}

function fetchWeatherData(city, temperatureUnit) {
  return fetchCurrentWeather(city, temperatureUnit);
}

export function updateCurrentWeather(city) {
  const temperatureUnit = 'metric';
  fiveDaysSection.classList.add('is-hidden');
  todaySection.classList.remove('is-hidden');
  buttonList.classList.remove('style-fivedays');
  btnShowChart.classList.add('is-hidden');
  quote.classList.remove('is-hidden');
  cityStyle.classList.add('is-hidden');
  chartSection.classList.add('is-hidden');

  fetchWeatherData(city, temperatureUnit)
    .then(weatherData => {
      updateWeatherData(weatherData);
    })
    .catch(error => {
      console.error('Error fetching weather data:', error);
      temperatureElement.textContent = 'Error fetching weather data';
    });
}
