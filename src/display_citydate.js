export function updateTimeForCity(cityName) {
  const sunriseDisplay = document.getElementById('sunriseDisplay');
  const sunsetDisplay = document.getElementById('sunsetDisplay');

  if (!cityName) {
    console.error('City name is missing.');
    return;
  }
  const apiKey = '384cfe62d8b3ed2e8a555db347025eef';

  // Fetch sunrise and sunset times for the specified city
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
          { hour: '2-digit', minute: '2-digit', hour12: false }
        );
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

export function updateTimeWithTimeZone(data) {
  const currentTime = new Date();
  let localTimeToGMT = data.locationTimezone / 3600;
  let searchedCityToGMT = data.timezone / 3600;
  let hours = currentTime.getHours();
  let timeDifference = 0;
  if (localTimeToGMT > searchedCityToGMT) {
    if (localTimeToGMT >= 0) {
      if (searchedCityToGMT >= 0) {
        timeDifference = (localTimeToGMT - searchedCityToGMT) * -1;
      } else if (searchedCityToGMT < 0) {
        searchedCityToGMT *= -1;
        timeDifference = (localTimeToGMT + searchedCityToGMT) * -1;
      }
    } else if (localTimeToGMT < 0) {
      if (searchedCityToGMT < 0) {
        searchedCityToGMT *= -1;
        localTimeToGMT *= -1;
        timeDifference = (localTimeToGMT - searchedCityToGMT) * -1;
      }
    }
  } else if (searchedCityToGMT > localTimeToGMT) {
    if (localTimeToGMT >= 0) {
      timeDifference = searchedCityToGMT - localTimeToGMT;
    } else if (localTimeToGMT < 0) {
      localTimeToGMT *= -1;
      timeDifference = searchedCityToGMT + localTimeToGMT;
    }
  }

  if (timeDifference >= 0) {
    if (hours + timeDifference >= 24) {
      hours = timeDifference - (24 - hours);
    } else {
      hours += timeDifference;
    }
  } else if (timeDifference < 0) {
    if (hours + timeDifference < 0) {
      timeDifference *= -1;
      hours = 24 - (timeDifference - hours);
    } else {
      timeDifference *= -1;
      hours -= timeDifference;
    }
  }
  const formattedHour = String(hours).padStart(2, '0');
  const formattedMin = String(currentTime.getMinutes()).padStart(2, '0');
  const formattedSec = String(currentTime.getSeconds()).padStart(2, '0');

  const timeElement = document.querySelector('.dateDisplay__hour');
  timeElement.textContent = `${formattedHour}:${formattedMin}:${formattedSec}`;
}
