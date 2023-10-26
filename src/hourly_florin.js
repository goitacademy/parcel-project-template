const apiKey = '6216a81b549dd86d0e4b82bf256e85c0';
const city = 'Paris';

const cardsContainer = document.querySelector('.days');

function createWeatherCard(
  time,
  temperature,
  pressureInhPa,
  humidity,
  windSpeed
) {
  const card = document.createElement('div');
  card.classList.add('weather-card');
  card.innerHTML = `
    <div class="weather-card__time">
      <h2 class="weather-card__time-hour">${time}</h2>
      <svg class="weather-card__time-icon">
        <use href="./images/icons.svg#icon-cloudy"></use>
      </svg>
      <h1 class="weather-card__time-temp">${temperature}</h1>
    </div>
    <div class="weather-card__details">
      <div class="weather-card__barometer">
        <svg class="weather-card__details-icons">
          <use href="./images/icons.svg#icon-barometer"></use>
        </svg>
        <p class="weather-card__details-text">${pressureInhPa}</p>
      </div>
      <div class="weather-card__humidity">
        <svg class="weather-card__details-icons">
          <use href="./images/icons.svg#icon-humidity"></use>
        </svg>
        <p class="weather-card__details-text">${humidity}</p>
      </div>
      <div class="weather-card__wind">
        <svg class="weather-card__details-icons">
          <use href="./images/icons.svg#icon-wind"></use>
        </svg>
        <p class="weather-card__details-text">${windSpeed}</p>
      </div>
    </div>
  `;
  return card;
}

function convertPressureToMmHg(pressureInhPa) {
  return (pressureInhPa * 0.75006375541921).toFixed(2);
}

fetch(
  `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`
)
  .then(response => response.json())
  .then(hourlyData => {
    const next7HoursData = hourlyData.list.slice(0, 7);

    next7HoursData.forEach(hourData => {
      const date = new Date(hourData.dt * 1000);
      const hour = date.getHours();
      const minutes = date.getMinutes();

      const hourTime = `${hour.toString().padStart(2, '0')}:${minutes
        .toString()
        .padStart(2, '0')}`;

      const hourTemperature = `${Math.round(hourData.main.temp - 273.15)}°C`;
      const hourPressureInhPa = `${hourData.main.pressure} hPa`;
      const hourPressureInMmHg = `${convertPressureToMmHg(
        hourData.main.pressure
      )} mm`;
      const hourHumidity = `${hourData.main.humidity} %`;
      const hourWindSpeed = `${hourData.wind.speed} m/s`;

      const hourCard = createWeatherCard(
        hourTime,
        hourTemperature,
        hourPressureInMmHg,
        hourHumidity,
        hourWindSpeed
      );
      cardsContainer.appendChild(hourCard);
    });
  })
  .catch(error => {
    console.error('Eroare la obținerea datelor pentru orele următoare:', error);
  });
