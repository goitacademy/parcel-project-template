// My API key:07aed853a2b3116bf7e19dfeee63b968

const apiKey = '07aed853a2b3116bf7e19dfeee63b968';
const city = 'London';

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

  // Clear any existing forecast items
  forecastItems.innerHTML = '';

  const dayMap = {}; // Use this object to group data by day

  // Loop through the data and group it by day
  data.list.forEach(item => {
    const date = new Date(item.dt * 1000);
    const day = date.toDateString();

    if (!dayMap[day]) {
      dayMap[day] = [];
    }

    dayMap[day].push(item);
  });

  // Loop through the grouped data and populate the forecast for each day
  for (const day in dayMap) {
    const forecastItem = document.createElement('div');
    forecastItem.classList.add('weather-forecast-item');

    // Extract data for the first item of each day (assuming it's at the same time for each day)
    const firstItem = dayMap[day][0];

    const dayElement = document.createElement('div');
    dayElement.classList.add('day');
    const date = new Date(firstItem.dt * 1000);
    dayElement.textContent = `${getDayOfWeek(date)}, ${formatDate(date)}`;
    forecastItem.appendChild(dayElement);

    // Extract and display other weather information such as temperature and icons
    const temperatureElement = document.createElement('div');
    temperatureElement.classList.add('temperature');
    const minTemp = firstItem.main.temp_min;
    const maxTemp = firstItem.main.temp_max;
    temperatureElement.innerHTML = `Min: ${minTemp}&deg;C | Max: ${maxTemp}&deg;C`;
    forecastItem.appendChild(temperatureElement);

    // Display the weather icon
    const iconElement = document.createElement('img');
    const iconCode = firstItem.weather[0].icon;
    iconElement.src = `https://openweathermap.org/img/wn/${iconCode}.png`;
    iconElement.alt = 'weather-icon';
    forecastItem.appendChild(iconElement);

    forecastItems.appendChild(forecastItem);
  }
}

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
