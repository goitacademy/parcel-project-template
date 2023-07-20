const baseUrlForTodayWeather =
  'https://api.openweathermap.org/data/2.5/weather?APPID=072ec51636e5141423703ba32d12100f&units=metric&lang=en&q=';
const baseUrlForFiveDayWeather =
  'https://api.openweathermap.org/data/2.5/forecast?APPID=072ec51636e5141423703ba32d12100f&units=metric&lang=en&q=';

const APIKEY = '072ec51636e5141423703ba32d12100f'; // Cheia de API de la OpenWeatherMap

const makeUrlForDetectedCityFromCurrentCoord = (latitude, longitude) => {
  return `https://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&appid=${APIKEY}`;
};

export default {
  city: 'Bucharest',
  today: null,
  fiveDay: null,
  blockSection: 'today',

  // Funcție care află orasul
  getCurrentLocationCoord() {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    })
      .then(location => {
        const url = makeUrlForDetectedCityFromCurrentCoord(
          location.coords.latitude,
          location.coords.longitude
        );

        return fetch(url)
          .then(response => response.json())
          .then(data => {
            this.city = data[0].name;

            return this.city;
          })
          .catch(err => {
            throw err;
          });
      })
      .catch(error => {
        throw error;
      });
  },
};
