const apiKey = '384cfe62d8b3ed2e8a555db347025eef';

export function updateTimeForCity(cityName) {
  if (!cityName) {
    console.error('City name is missing.');
    return;
  }

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`
  )
    .then(response => response.json())
    .then(data => {
      if (data.cod === 200) {
        const sunriseTime = new Date(
          data.sys.sunrise * 1000
        ).toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        });
        const sunsetTime = new Date(data.sys.sunset * 1000).toLocaleTimeString(
          [],
          {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
          }
        );

        const sunriseDisplay = document.getElementById('sunriseDisplay');
        const sunsetDisplay = document.getElementById('sunsetDisplay');

        sunriseDisplay.textContent = `${sunriseTime}`;
        sunsetDisplay.textContent = `${sunsetTime}`;
      } else {
        console.error('Error fetching data for city:', data.message);
      }
    })
    .catch(error =>
      console.error('Error fetching data from OpenWeatherMap:', error)
    );
}

export function updateTimeWithTimeZone(timezoneOffset) {
  const currentTime = new Date();
  const localTimeToGMT = currentTime.getTimezoneOffset() / 60;
  const timeDifference = timezoneOffset + localTimeToGMT;

  let hours = currentTime.getHours() + timeDifference;
  hours = (hours + 24) % 24; // Ensure hours are between 0 and 23

  const formattedHour = String(hours).padStart(2, '0');
  const formattedMin = String(currentTime.getMinutes()).padStart(2, '0');
  const formattedSec = String(currentTime.getSeconds()).padStart(2, '0');

  const timeElement = document.querySelector('.dateDisplay__hour');
  timeElement.textContent = `${formattedHour}:${formattedMin}:${formattedSec}`;
}
