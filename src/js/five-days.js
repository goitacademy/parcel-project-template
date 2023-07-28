//fetchForecast('New York', 'metric') // replace 'New York' with the city name and 'metric' with your temperature unit
//.then(data => {
//const forecastList = data.list; // assuming the API response contains a 'list' property with the forecast data
// const items = document.querySelectorAll('.five-days__item');

// forecastList.forEach((forecast, index) => {
// Populate each item with the forecast data
// const dayElement = items[index].querySelector('.five-days__day');
//const dateElement = items[index].querySelector('.five-days__date');
//const minTempElement = items[index].querySelector('.temperature-min__value');
//const maxTempElement = items[index].querySelector('.temperature-max__value');

// Fill the elements with data
//dayElement.textContent = forecast.dt_txt; // replace 'dt_txt' with the actual property name from the API response
//dateElement.textContent = forecast.dt_txt; // replace 'dt_txt' with the actual property name from the API response
//minTempElement.
//minTemp
//textContent = forecast.main.temp_min; // replace 'main.temp_min' with the actual property name from the API response
//maxTempElement.textContent = forecast.main.temp_max; // replace 'main.temp_max' with the actual property name from the API response

//.catch(error => console.error(error));
// Afișează datele în carduri
//import {
// fetchForecast,
//fetchForecastByGeolocation,
// fetchCurrentWeather,
// fetchCurrentWeatherByGeolocation,
//  } from './api-utils'; //
//async function displayWeatherData(query, temperatureUnit) {
// try {
// Preia datele de la API
//  const forecastData = await fetchForecast(query, temperatureUnit);
// const currentWeatherData = await fetchCurrentWeather(
//   query,
//   temperatureUnit
//);

//const fiveDaysInfo = document.querySelector('.five-days__info');
//fiveDaysInfo.innerHTML = ''; // Golește lista în cazul în care există carduri vechi

// Iterează prin datele de la API pentru a construi cardurile
// forecastData.list.forEach(forecast => {
// const { dt, weather, main } = forecast;

// const date = new Date(dt * 1000); // Converteste timestampul în data
// const day = date.toLocaleString('en-US', { weekday: 'long' });

// const formattedDate = `${date.getDate()} ${date.toLocaleString('en-US', {
//  month: 'short',
//})}`;

//const card = `
// <li class="five-days__item show-initial hide-on-click">
//<p class="five-days__day">${day}</p>
//<p class="five-days__date">${formattedDate}</p>
//<img src="http://openweathermap.org/img/w/${weather[0].icon}.png" alt="${weather[0].description}">
//<div class="five-days__temperature">
// <div class="temperature-min">
//  <p class="temperature-min__title">min</p>
//  <span class="temperature-min__value">${main.temp_min}</span>
//</div>
//<div class="temperature-max">
// <p class="temperature-max__title">max</p>
//  <span class="temperature-max__value">${main.temp_max}</span>
// </div>
//</div>
//<button class="five-days__button">more info</button>
//</li>
//`;

//  fiveDaysInfo.insertAdjacentHTML('beforeend', card);
//});

// Afisează și datele curente în cardurile corespunzătoare
// const currentWeatherCard = document.querySelector('.city__name');
//currentWeatherCard.textContent = currentWeatherData.name;
//} catch (error) {
//  console.error('Error fetching weather data:', error);
//}
//}

// Exemplu de utilizare
//const query = 'Bucharest'; // Înlocuiește cu orașul sau locația dorită
//const temperatureUnit = 'metric'; // Pentru Celsius, sau 'imperial' pentru Fahrenheit
//displayWeatherData(query, temperatureUnit);
