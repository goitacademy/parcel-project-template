import Chart from 'chart.js/auto';
import { fetchForecast } from './api';

document.addEventListener('DOMContentLoaded', () => {
  const chartSection = document.querySelector('.chart');
  const hideChartButton = document.querySelector('.hide-chart-button__btn');
  const chartCanvas = document.getElementById('weatherChart');
  let weatherChart = null;

  hideChartButton.addEventListener('click', () => {
    chartSection.classList.toggle('hidden-chart');
  });

  const temperatureUnit = 'metric';
  const input = document.querySelector('.js-form input[name="query"]');
  const form = document.querySelector('.js-form');
  const city = document.querySelector('.city__name');
  form.addEventListener('submit', fetchAndRenderChart);

  async function fetchAndRenderChart(e) {
    e.preventDefault();
    console.log('Form submitted');
    try {
      const forecastData = await fetchForecast(input.value, temperatureUnit);
      city.textContent = forecastData.city.name;
      const dailyData = getDailyData(forecastData);
      renderChart(dailyData);
    } catch (error) {
      console.error('Error while fetching weather data: ', error);
    }
  }

  function getDailyData(forecastData) {
    return forecastData.list.filter(
      (item, index, self) =>
        index ===
        self.findIndex(
          t =>
            new Date(t.dt * 1000).getDay() === new Date(item.dt * 1000).getDay()
        )
    );
  }

  function renderChart(dailyData) {
    const labels = dailyData.map(item =>
      new Date(item.dt * 1000).toLocaleDateString('default', {
        day: 'numeric',
        month: 'short',
      })
    );
    const temperatures = dailyData.map(item => item.main.temp);
    const humidities = dailyData.map(item => item.main.humidity);
    const windSpeeds = dailyData.map(item => item.wind.speed);
    const atmospherePressures = dailyData.map(item => item.main.pressure);

    if (weatherChart) {
      weatherChart.destroy();
      weatherChart = null;
    }

    weatherChart = new Chart(chartCanvas, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: '- Temperature, C°',
            data: temperatures,
            borderColor: 'rgba(255, 107, 9, 1)',
            borderWidth: 2,
            fill: false,
          },
          {
            label: '- Humidity, %',
            data: humidities,
            borderColor: 'rgba(9, 6, 235, 1)',
            borderWidth: 2,
            fill: false,
          },
          {
            label: '- Wind Speed, m/s',
            data: windSpeeds,
            borderColor: 'rgba(234, 154, 5, 1)',
            borderWidth: 2,
            fill: false,
          },
          {
            label: '- Atmosphere Pressure, m/m',
            data: atmospherePressures,
            borderColor: 'rgba(6, 120, 6, 1)',
            borderWidth: 2,
            fill: false,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            display: true,
            grid: {
              display: true,
            },
          },
          y: {
            display: true,
            grid: {
              display: true,
            },
          },
        },
      },
    });
  }
});
