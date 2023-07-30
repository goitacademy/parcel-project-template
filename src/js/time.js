const dayRef = document.querySelector('.time-day');
const monthRef = document.querySelector('.month');
const timeRef = document.querySelector('.hour');

const moment = require('moment-timezone');

const nth = function (d) {
  if (d > 3 && d < 21) return 'th';
  switch (d % 10) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
};

const intervalId = setInterval(() => {
  const date = new Date();
  const changeDate = moment(date).utcOffset(oneDayData.timezone / 60);

  const dayNow = date.getDate();

  const weekDayNow = new Intl.DateTimeFormat('en', { weekday: 'short' }).format(
    date
  );

  dayRef.innerHTML = `${dayNow}<sup class="date__day--nth">${nth(
    dayNow
  )}</sup> ${weekDayNow}`;

  monthRef.textContent = new Intl.DateTimeFormat('en', {
    month: 'long',
  }).format(date);
  timeRef.textContent =
    pad(changeDate.hours()) +
    ':' +
    pad(changeDate.minutes()) +
    ':' +
    pad(changeDate.seconds());
}, 1000);

function pad(value) {
  return String(value).padStart(2, '0');
}

const sunriseTime = document.querySelector('.sunrise-time');
const sunsetTime = document.querySelector('.sunset-time');

function addZero(i) {
  if (i < 10) {
    i = '0' + i;
  }
  return i;
}
constsunTime = (sunrise, sunset) => {
  const daterise = new Date(sunrise * 1000);
  const sunrisechange = moment(daterise).utcOffset(oneDayData.timezone / 60);

  const dateset = new Date(sunset * 1000);
  const sunsetchange = moment(dateset).utcOffset(oneDayData.timezone / 60);

  const sunriseHours = addZero(sunrisechange.hours());
  const sunriseMinutes = addZero(sunrisechange.minutes());
  const sunsetHours = addZero(sunsetchange.hours());
  const sunsetMinutes = addZero(sunsetchange.minutes());
  sunriseTime.textContent = sunriseHours + ':' + sunriseMinutes;
  sunsetTime.textContent = sunsetHours + ':' + sunsetMinutes;
};

let oneDayData = {};

export default function timeForToday(data) {
  oneDayData = data.city;
  sunTime(oneDayData.sunrise, oneDayData.sunset);
}
