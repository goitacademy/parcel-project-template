import Chart from 'chart.js/auto';
import { fetchForecast } from './api';

const favoritesList = document.querySelector('.js-slider-list');
let temperatureUnit = 'metric';
const btnShowChart = document.querySelector('.show-chart');

document.addEventListener('DOMContentLoaded', () => {
  const chartSection = document.querySelector('.chart');
  const hideChartButton = document.querySelector('.hide-chart-button__btn');
  const chartCanvas = document.getElementById('weatherChart');
  let weatherChart = null;

  hideChartButton.addEventListener('click', () => {
    chartSection.classList.add('is-hidden');
    btnShowChart.classList.remove('is-hidden');
  });

  const temperatureUnit = 'metric';
  const input = document.querySelector('.js-form input[name="query"]');
  const form = document.querySelector('.js-form');
  const cityElement = document.querySelector('.city__name');
  form.addEventListener('submit', fetchAndRenderChart);

  async function fetchAndRenderChart(e) {
    e.preventDefault();
    console.log('Form submitted');
    try {
      const cityValue = input.value;
      const forecastData = await fetchForecast(cityValue, temperatureUnit);
      cityElement.textContent = forecastData.city.name;
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

  async function fetchAndRenderFavoriteChart(cityValue) {
    try {
      const forecastData = await fetchForecast(cityValue, temperatureUnit);
      cityElement.textContent = forecastData.city.name;
      const dailyData = getDailyData(forecastData);
      renderChart(dailyData);
    } catch (error) {
      console.error('Error while fetching weather data: ', error);
    }
  }

  favoritesList.addEventListener('click', event => {
    if (event.target.classList.contains('favorite-button')) {
      const cityValue = event.target.value;
      handleSelectedFavorite(cityValue, temperatureUnit);
      fetchAndRenderFavoriteChart(cityValue, temperatureUnit);
    }
  });

  async function handleSelectedFavorite(cityValue) {
    try {
      const forecastData = await fetchForecast(cityValue, temperatureUnit);
      cityElement.textContent = forecastData.city.name;
      const dailyData = getDailyData(forecastData);
      renderChart(dailyData);
    } catch (error) {
      console.error('Error while fetching weather data: ', error);
    }
  }

  function handleSelectedFavorite(cityValue, temperatureUnit) {
    fetchAndRenderFavoriteChart(cityValue, temperatureUnit);
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
            label: 'AVERAGE: ',
            data: '',
            fill: false,
            color: 'gray',
            textAlign: 'left',
            font: {
              family: 'Lato',
              size: 14,
              style: 'normal',
              weight: 400,
            },
          },
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
        aspectRatio: 580 / 345,
        interaction: {
          mode: 'nearest',
          axis: 'xy',
        },
        scales: {
          x: {
            ticks: {
              autoSkip: false,
              minRotation: 0,
            },
            display: true,
            grid: {
              display: true,
              color: 'rgba(118, 119, 121, 0.5)',
            },
          },
          y: {
            display: true,
            grid: {
              display: true,
              color: 'rgba(118, 119, 121, 0.5)',
            },
            title: {
              display: true,
              text: 'Value of Indicators',
              color: 'gray',
              textAlign: 'center',
              font: {
                family: 'Lato',
                size: 14,
                style: 'normal',
                weight: 400,
                fillOpacity: 0.3,
              },
            },
          },
        },
      },
    });
  }
});
