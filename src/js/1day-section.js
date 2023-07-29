import axios from 'axios';
import './api';

const city = 'Paris';
const temperatureElement = document.querySelector('.today-weather__current');
const minTemperatureElement = document.querySelector(
  '.today-minmax__mindegree'
);
const maxTemperatureElement = document.querySelector(
  '.today-minmax__maxdegree'
);

function updateWeatherData(data) {
  const currentTemperature = data.main.temp;
  const minTemperature = data.main.temp_min;
  const maxTemperature = data.main.temp_max;

  temperatureElement.textContent = `${currentTemperature} °C`;
  minTemperatureElement.textContent = `${minTemperature} °C`;
  maxTemperatureElement.textContent = `${maxTemperature} °C`;
}

async function fetchWeatherData() {
  try {
    const temperatureUnit = 'metric';
    const queryString = `${ENDPOINT}/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${temperatureUnit}`;
    const response = await axios.get(queryString);
    updateWeatherData(response.data);
  } catch (error) {
    console.error('Error fetching weather data:', error);
    temperatureElement.textContent = 'Error fetching weather data';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  fetchWeatherData();
});
