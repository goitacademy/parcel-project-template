const apiKey = 'b020e77384bc7c2bb3dc12335a4ea0e7';
const latitude = 46.770439;
const longitude = 23.591423;

const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const temperatureCelsius = data.list[0].main.temp - 273.15;
    const humidity = data.list[0].main.humidity;
    const windSpeed = data.list[0].wind.speed;
    const atmosphericPressure = data.list[0].main.pressure;

    const weatherData = [
      { label: 'Temperature (°C)', value: temperatureCelsius },
      { label: 'Humidity (%)', value: humidity },
      { label: 'Wind Speed (m/s)', value: windSpeed },
      {
        label: 'Atmospheric Pressure (mbar)',
        value: atmosphericPressure,
      },
    ];

    const ctx = document.getElementById('weather-chart').getContext('2d');
    const weatherChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: weatherData.map(item => item.label),
        datasets: [
          {
            label: 'Weather Data',
            data: weatherData.map(item => item.value),
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  })
  .catch(error => {
    console.error('Error fetching weather data:', error);
  });
