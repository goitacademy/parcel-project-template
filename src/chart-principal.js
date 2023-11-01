async function getWeatherData() {
  const API_KEY = '07aed853a2b3116bf7e19dfeee63b968';
  const city = 'Bucharest';

  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
    );

    const weatherData = response.data.list
      .filter((item, index) => index % 8 === 0)
      .map(item => item.main.temp);

    const labels = response.data.list
      .filter((item, index) => index % 8 === 0)
      .map(item => {
        const date = new Date(item.dt * 1000);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
      });

    return { weatherData, labels };
  } catch (error) {
    console.error('Eroare la obținerea datelor meteorologice:', error);
    return null;
  }
}

async function getHumidityData() {
  const API_KEY = '07aed853a2b3116bf7e19dfeee63b968';
  const city = 'Bucharest';

  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
    );

    const humidityData = response.data.list
      .filter((item, index) => index % 8 === 0)
      .map(item => item.main.humidity);
    const labels = response.data.list
      .filter((item, index) => index % 8 === 0)
      .map(item => {
        const date = new Date(item.dt * 1000);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
      });

    return { humidityData, labels };
  } catch (error) {
    console.error('Eroare la obținerea datelor de umiditate:', error);
    return null;
  }
}

async function getWindData() {
  const API_KEY = '07aed853a2b3116bf7e19dfeee63b968';
  const city = 'Bucharest';

  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
    );

    const windData = response.data.list
      .filter((item, index) => index % 8 === 0)
      .map(item => item.wind.speed);
    const labels = response.data.list
      .filter((item, index) => index % 8 === 0)
      .map(item => {
        const date = new Date(item.dt * 1000);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
      });

    return { windData, labels };
  } catch (error) {
    console.error('Eroare la obținerea datelor pentru viteza vantului:', error);
    return null;
  }
}

async function getAtmosphereData() {
  const API_KEY = '07aed853a2b3116bf7e19dfeee63b968';
  const city = 'Bucharest';

  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
    );

    const atmosphereData = response.data.list
      .filter((item, index) => index % 8 === 0)
      .map(item => item.main.pressure);

    const labels = response.data.list
      .filter((item, index) => index % 8 === 0)
      .map(item => {
        const date = new Date(item.dt * 1000);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
      });

    return { atmosphereData, labels };
  } catch (error) {
    console.error(
      'Eroare la obținerea datelor pentru presiunea atmosferica:',
      error
    );
    return null;
  }
}

async function generateWeatherChart() {
  const weatherData = await getWeatherData();
  const humidityData = await getHumidityData();
  const windData = await getWindData();
  const atmosphereData = await getAtmosphereData();
  if (weatherData) {
    const ctx = document.getElementById('myChart').getContext('2d');
    const chartFont = () => {
      if (window.innerWidth < 480) {
        return 12;
      } else {
        return 18;
      }
    };
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
        responsive: true,
        scales: {
          x: {
            grid: {
              color: 'rgb(100, 100, 100)',
            },
            ticks: {
              color: 'rgb(100, 100, 100)',
            },
            title: {
              display: true,
              text: 'Date[dd/mm/yyyy]',
              color: 'rgb(100, 100, 100)',
              font: {
                size: chartFont(),
              },
            },
          },
          y: {
            beginAtZero: true,
            grid: {
              color: 'rgb(100, 100, 100)',
            },
            ticks: {
              color: 'rgb(100, 100, 100)',
            },
            title: {
              display: true,
              text: 'Value of Indicators',
              color: 'rgb(100, 100, 100)',
              font: {
                size: chartFont(),
              },
            },
          },
        },
      },
    });
    const chartContainer = document.querySelector('.chart-container');
    chartContainer.classList.add('hidden');

    localStorage.setItem('chartContainerActivated', 'false');
  }
}

generateWeatherChart();

const chartCanvas = document.getElementById('myChart');
const toggleButton = document.getElementById('chartButton');

window.addEventListener('load', function () {
  const chartState = localStorage.getItem('chartContainerActivated');

  if (chartState === 'true') {
    chartCanvas.style.display = 'block';
    toggleButton.innerText = 'Hide Chart';
  } else {
    chartCanvas.style.display = 'none';
    toggleButton.innerText = 'Show Chart';
  }
});

toggleButton.addEventListener('click', function (event) {
  event.preventDefault();
  if (chartCanvas.style.display === 'none') {
    chartCanvas.style.display = 'block';
    toggleButton.innerText = 'Hide Chart';
    localStorage.setItem('chartContainerActivated', 'true');
  } else {
    chartCanvas.style.display = 'none';
    toggleButton.innerText = 'Show Chart';
    localStorage.setItem('chartContainerActivated', 'false');
  }
});

chartCanvas.style.display = 'none';

function activateChartContainer() {
  var chartContainer = document.querySelector('.chart-container');

  if (chartContainer) {
    chartContainer.classList.remove('hidden');
    localStorage.setItem('chartContainerActivated', 'true');

    var toggleButton = document.getElementById('chartButton');
    toggleButton.innerText = 'Show Chart';
  }
}

/* add Event

var activateButton = document.getElementById('5-days-button');
activateButton.addEventListener('click', activateChartContainer);

function deactivateChartContainer() {
  var chartContainer = document.querySelector('.chart-container');
  if (chartContainer) {
    chartContainer.classList.add('hidden');
    localStorage.setItem('chartContainerDeactivated', 'true');
  }
}

var deactivateButton = document.getElementById('today-button');
deactivateButton.addEventListener('click', deactivateChartContainer); 

*/
