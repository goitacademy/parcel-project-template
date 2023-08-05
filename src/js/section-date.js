import { fetchCurrentWeather } from './api.js';
const dayli = document.querySelector('.dayli-container');
function updateCurrentDateData(data) {
  var now = new Date();
  var utc_now = new Date(
    now.getUTCFullYear(),
    now.getUTCMonth(),
    now.getUTCDate(),
    now.getUTCHours(),
    now.getUTCMinutes(),
    now.getUTCSeconds(),
    now.getUTCMilliseconds()
  );
  const localTimeInMilliseconds = utc_now.getTime() + data.timezone * 1000;
  const currentDate = new Date(localTimeInMilliseconds);
  updateDayNumber(currentDate);
  updateDayName(currentDate);
  updateCurrentMonth(currentDate);
  updateCurrentTime(currentDate);
  updateSunriseTime(data.sys.sunrise);
  updateSunsetTime(data.sys.sunset);
}

function updateSunriseTime(sunriseTime) {
  const timeAsString = getTimeAsString(sunriseTime);
  const dateSunriseParagraph = document.querySelector('.date__sunrise');
  dateSunriseParagraph.innerHTML = timeAsString;
}

function updateSunsetTime(sunsetTime) {
  const timeAsString = getTimeAsString(sunsetTime);
  const dateSunsetParagraph = document.querySelector('.date__sunset');

  dateSunsetParagraph.innerHTML = timeAsString;
}

function getTimeAsString(time) {
  const date = new Date(time * 1000);
  const hours = date.getHours();
  const hoursString = hours >= 10 ? hours.toString() : '0' + hours.toString();
  const minutes = date.getMinutes();
  const minutesString =
    minutes >= 10 ? minutes.toString() : '0' + minutes.toString();
  const timeAsString = hoursString + ':' + minutesString;

  return timeAsString;
}

function updateCurrentTime(currentDate) {
  var currentTime =
    currentDate.getHours() +
    ':' +
    currentDate.getMinutes() +
    ':' +
    currentDate.getSeconds();

  const currentTimeParagraph = document.querySelector('.date__hours');
  currentTimeParagraph.innerHTML = currentTime;
}

function updateCurrentMonth(currentDate) {
  const month = currentDate.toLocaleString('default', { month: 'long' });
  const dateMonthParagraph = document.querySelector('.date__month');
  dateMonthParagraph.innerHTML = month;
}

function updateDayName(currentDate) {
  const weekday = currentDate.toLocaleString('default', { weekday: 'short' });
  const dateDayWeekParagraph = document.querySelector('.date__day-week');
  dateDayWeekParagraph.innerHTML = weekday;
}

function updateDayNumber(currentDate) {
  const currentDayNumber = currentDate.getDate();
  const currentDayNumberParagraph = document.querySelector('.date__day-now');
  const dayNumberOrder = getDayNumberOrder(currentDayNumber);

  currentDayNumberParagraph.innerHTML = `${currentDayNumber}<sup>${dayNumberOrder}</sup>`;
}

function getDayNumberOrder(dayNumber) {
  if (dayNumber == 1) {
    return 'st';
  } else if (dayNumber == 2) {
    return 'nd';
  } else if (dayNumber == 3) {
    return 'rd';
  } else {
    return 'th';
  }
}

export function updateCurrentDate(city) {
  const temperatureUnit = 'metric';
  dayli.classList.remove('is-hidden');
  fetchCurrentWeather(city, temperatureUnit)
    .then(weatherData => {
      updateCurrentDateData(weatherData);
    })
    .catch(error => {
      console.error('Error fetching weather data:', error);
    });
}
