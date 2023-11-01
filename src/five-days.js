const apiKey = '07aed853a2b3116bf7e19dfeee63b968';
const city = 'Dublin';
const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;

async function fetchWeatherData() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    updateForecast(data);
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
}

function updateForecast(data) {
  const forecastItems = document.getElementById('weather-forecast');
  forecastItems.innerHTML = '';

  const dayMap = {};

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  data.list.forEach(item => {
    const date = new Date(item.dt * 1000);
    const day = date.toDateString();

    if (date >= tomorrow) {
      if (!dayMap[day]) {
        dayMap[day] = [];
      }

      dayMap[day].push(item);
    }
  });

  for (const day in dayMap) {
    const forecastItem = document.createElement('div');
    forecastItem.classList.add('weather-forecast-item');
    const firstItem = dayMap[day][0];
    const allInfo = document.createElement('div');
    allInfo.classList.add('all-about');
    const dayElement = document.createElement('div');
    dayElement.classList.add('day');
    dayElement.innerHTML = `<div class="day-name">${getDayOfWeek(
      firstItem.dt
    )}</div> <div class="date">${formatDate(
      new Date(firstItem.dt * 1000)
    )}</div>`;
    allInfo.appendChild(dayElement);

    const iconElement = document.createElement('img');
    iconElement.classList.add('w-icon');
    const iconCode = firstItem.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    iconElement.src = iconUrl;
    iconElement.alt = 'weather-icon';
    allInfo.appendChild(iconElement);

    const temperatureElement = document.createElement('div');
    temperatureElement.classList.add('temperature');
    const minTempKelvin = firstItem.main.temp_min;
    const maxTempKelvin = firstItem.main.temp_max;
    const minTemp = Math.round(minTempKelvin - 273.15);
    const maxTemp = Math.round(maxTempKelvin - 273.15);
    temperatureElement.innerHTML = `<div class="temperature__deg"><div class="temperature__design">min</div>
      <div class="temperature__data"> ${minTemp}&deg;C</div></div><span class="temperature__line"></span><div class="temperature__deg"><div class="temperature__design" > max</div>
    <div class="temperature__data"> ${maxTemp}&deg;C</div></div>`;
    allInfo.appendChild(temperatureElement);
    const moreButton = document.createElement('button');
    moreButton.classList.add('more-btn');
    moreButton.innerHTML = 'more info';
    allInfo.appendChild(moreButton);
    forecastItems.appendChild(allInfo);
  }
}

// A "getDayOfWeek" és "formatDate" függvények implementációjától függően azokat is módosíthatod az új dátumformátumhoz és a nap nevének megjelenítéséhez.

function getDayOfWeek(date) {
  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  return daysOfWeek[date.getDay()];
}

function formatDate(date) {
  const options = { month: 'short', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
}

fetchWeatherData();
