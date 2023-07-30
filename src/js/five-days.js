import {
  fetchForecast,
  fetchForecastByGeolocation,
  fetchCurrentWeather,
} from './api';
import './search';
const temperatureUnit = 'metric';
const input = document.querySelector('.js-form input[name="query"]');
const form = document.querySelector('.js-form');
const city = document.querySelector('.city__name');
const icon = document.querySelector('.five-days__icon use');
form.addEventListener('submit', fetchForecast5Day);
async function fetchForecast5Day(e) {
  e.preventDefault();
  try {
    const forecastData = await fetchForecast(input.value, temperatureUnit);
    city.textContent = forecastData.city.name;
    const dailyData = getDailyData(forecastData);
    updateForecast(dailyData);
  } catch (error) {
    console.error('Error while fetching weather data: ', error);
  }
}
function getDailyData(forecastData) {
  return forecastData.list.filter(
    (item, index, self) =>
      index ===
      self.findIndex(
        t =>
          new Date(t.dt * 1000).getDay() === new Date(item.dt * 1000).getDay()
      )
  );
}
function updateForecast(dailyData) {
  for (let i = 0; i < 5; i++) {
    const forecastItem = dailyData[i];
    const dateItem = new Date(forecastItem.dt * 1000);

    const item = document.querySelector(`.five-days__item:nth-child(${i + 1})`);
    const day = item.querySelector('.five-days__day');
    const date = item.querySelector('.five-days__date');
    const tempMin = item.querySelector('.temperature-min__value');
    const tempMax = item.querySelector('.temperature-max__value');
    const icon = item.querySelector('.five-days__icon use');

    day.textContent = dateItem.toLocaleString('default', { weekday: 'long' });
    date.textContent = dateItem.toLocaleString('default', {
      day: '2-digit',
      month: 'short',
    });
    tempMin.textContent = Math.round(forecastItem.main.temp_min);
    tempMax.textContent = Math.round(forecastItem.main.temp_max);

    const weatherIconName = getWeatherIcon(
      forecastItem.weather[0].main.toLowerCase()
    );
    icon.setAttribute('href', `./images/sprite.svg#${weatherIconName}`);
  }
}
function getWeatherIcon(weatherCondition) {
  switch (weatherCondition) {
    case 'clear':
      return 'icon-sun';
    case 'clouds':
      return 'icon-cloudy';
    case 'rain':
      return 'icon-rain';
    case 'snow':
      return 'icon-snow';
    default:
      return 'icon-default';
  }
}
