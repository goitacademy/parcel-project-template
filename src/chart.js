function toggleDataset(chart, datasetIndex) {
  chart.data.datasets[datasetIndex].hidden =
    !chart.data.datasets[datasetIndex].hidden;
  chart.update();
}

async function getWeatherData() {
  const API_KEY = 'eeffed10f27ca7ccae26c84b46ee1ea8';
  const city = 'Bucharest';

  //Utilizare temperatura

  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
    );

    const weatherData = response.data.list
      .slice(0, 5)
      .map(item => item.main.temp);
    const labels = response.data.list
      .slice(0, 5)
      .map(item => new Date(item.dt * 1000).toLocaleDateString());

    return { weatherData, labels };
  } catch (error) {
    console.error('Eroare la obținerea datelor meteorologice:', error);
    return null;
  }
}

//Utilizare umiditate

async function getHumidityData() {
  const API_KEY = 'eeffed10f27ca7ccae26c84b46ee1ea8';
  const city = 'Bucharest';

  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
    );

    const humidityData = response.data.list
      .slice(0, 5)
      .map(item => item.main.humidity);
    const labels = response.data.list
      .slice(0, 5)
      .map(item => new Date(item.dt * 1000).toLocaleDateString());

    return { humidityData, labels };
  } catch (error) {
    console.error('Eroare la obținerea datelor de umiditate:', error);
    return null;
  }
}

//Utilizare viteza vantului

async function getWindData() {
  const API_KEY = 'eeffed10f27ca7ccae26c84b46ee1ea8';
  const city = 'Bucharest';

  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
    );

    const windData = response.data.list
      .slice(0, 5)
      .map(item => item.wind.speed);
    const labels = response.data.list
      .slice(0, 5)
      .map(item => new Date(item.dt * 1000).toLocaleDateString());

    return { windData, labels };
  } catch (error) {
    console.error('Eroare la obținerea datelor pentru viteza vantului:', error);
    return null;
  }
}

//Utilizare atmosferei

async function getAtmosphereData() {
  const API_KEY = 'eeffed10f27ca7ccae26c84b46ee1ea8';
  const city = 'Bucharest';

  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
    );

    const atmosphereData = response.data.list
      .slice(0, 5)
      .map(item => item.main.pressure);
    const labels = response.data.list
      .slice(0, 5)
      .map(item => new Date(item.dt * 1000).toLocaleDateString());

    return { atmosphereData, labels };
  } catch (error) {
    console.error(
      'Eroare la obținerea datelor pentru presiunea atmosferica:',
      error
    );
    return null;
  }
}

// Functia de generare CHART

async function generateWeatherChart() {
  const weatherData = await getWeatherData();
  const humidityData = await getHumidityData();
  const windData = await getWindData();
  const atmosphereData = await getAtmosphereData();
  if (weatherData) {
    const ctx = document.getElementById('myChart').getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: weatherData.labels,
        datasets: [
          {
            label: 'Temperature',
            data: weatherData.weatherData,
            borderColor: 'rgb(255, 107, 9)',
            borderWidth: 2,
            fill: false,
          },
          {
            label: 'Humidity',
            data: humidityData.humidityData,
            borderColor: 'rgb(9, 6, 235)',
            borderWidth: 2,
            fill: false,
          },
          {
            label: 'Wind Speed',
            data: windData.windData,
            borderColor: 'rgb(234, 154, 5)',
            borderWidth: 2,
            fill: false,
          },
          {
            label: 'Atmosphere pressure',
            data: atmosphereData.atmosphereData,
            borderColor: 'rgb(6, 120, 6)',
            borderWidth: 2,
            fill: false,
          },
        ],
      },
      options: {
        scales: {
          x: {
            grid: {
              color: 'rgb(80, 80, 80)',
            },
            ticks: {
              color: 'rgb(80, 80, 80)',
            },
          },
          y: {
            beginAtZero: true,
            grid: {
              color: 'rgb(80, 80, 80)',
            },
            ticks: {
              color: 'rgb(80, 80, 80)',
            },
          },
        },
      },
    });
    myChart.onClick((e, activeElements) => {
      if (activeElements.length > 0) {
        const datasetIndex = activeElements[0].index;
        toggleDataset(myChart, datasetIndex);
      }
    });
  }
}

generateWeatherChart();
