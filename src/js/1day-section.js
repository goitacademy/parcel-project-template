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
  fetchWeatherData(city, temperatureUnit)
    .then(weatherData => {
      updateWeatherData(weatherData);
    })
    .catch(error => {
      console.error('Error fetching weather data:', error);
      temperatureElement.textContent = 'Error fetching weather data';
    });
}
