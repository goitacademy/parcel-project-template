import axios from 'axios';
const ENDPOINT = 'https://api.openweathermap.org';
const API_KEY = 'd52884a2e04f7a405073b1f70d08c546';
export async function fetchForecast(query, temperatureUnit) {
  const queryString = `${ENDPOINT}/data/2.5/forecast?q=${query}&appid=${API_KEY}&units=${temperatureUnit}`;
  const response = await axios.get(queryString);
  return response.data;
}

export async function fetchForecastByGeolocation(geolocation, temperatureUnit) {
  const queryString = `${ENDPOINT}/data/2.5/forecast?lat=${geolocation.latitude}&lon=${geolocation.longitude}&appid=${API_KEY}&units=${temperatureUnit}`;
  const response = await axios.get(queryString);
  return response.data;
}

export async function fetchCurrentWeather(query, temperatureUnit) {
  const queryString = `${ENDPOINT}/data/2.5/weather?q=${query}&appid=${API_KEY}&units=${temperatureUnit}`;
  const response = await axios.get(queryString);
  return response.data;
}

export async function fetchCurrentWeatherByGeolocation(
  geolocation,
  temperatureUnit
) {
  const queryString = `${ENDPOINT}/data/2.5/weather?lat=${geolocation.latitude}&lon=${geolocation.longitude}&appid=${API_KEY}&units=${temperatureUnit}`;
  const response = await axios.get(queryString);
  return response.data;
}
