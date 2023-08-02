import { Chart } from "chart.js/auto";

const labels = ['A', 'B', 'C', 'D', 'E'];
const chartSection = document.querySelector('.chart-section');
const ctx = document.querySelector('#myChart').getContext('2d');

const plugin = {
    id: 'customCanvasBackgroundColor',
    beforeDraw: (chart, args, options) => {
      const {ctx} = chart;
      ctx.save();
      ctx.globalCompositeOperation = 'destination-over';
      ctx.fillStyle = options.color || '#99ffff';
      ctx.fillRect(0, 0, chart.width, chart.height);
      ctx.restore();
    }
  };
  
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: labels,
        datasets: [{
          label: 'Temperature, °C',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        },
        {
            label: 'Humidity, %',
            data: [5, 7, 8, 81, 6, 33, 44],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        },
        {
            label: 'Wind speed, m/s',
            data: [7, 9, 23, 61, 1, 43, 34],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        },
        {
            label: 'Atmosphere pressure, m/m',
            data: [25, 37, 48, 71, 56, 33, 44],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }]
    },
    options: {
        layout: {
            padding : '10px',
        },
        plugins: {
          customCanvasBackgroundColor: {
            color: 'transparent',
          }
        }
      },
      plugins: [plugin],
    
});

const showChartBtn = document.querySelector('.showChart')
const hideChartBtn = document.querySelector('.hideChart');

showChartBtn.addEventListener('click', () => {
    chartSection.classList.remove('hidden');
    showChartBtn.classList.add('hidden');
    hideChartBtn.classList.remove('hidden');
})

hideChartBtn.addEventListener('click',() => {
    chartSection.classList.add('hidden');
    showChartBtn.classList.remove('hidden');
    hideChartBtn.classList.add('hidden');
});