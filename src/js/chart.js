import { Chart } from "chart.js/auto";
import moment from "moment";

let chartInstance;


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

function createChart(data){
    if (chartInstance){
        chartInstance.destroy();
    }

    let labels = new Set();
    let temperature = [];
    let humidity = [];
    let windSpeed = [];
    let atmospherePressure = [];

    for (let i = 0; i < data.list.length; i++) {
        labels.add(moment(data.list[i].dt_txt).format('DD-MMM-YYYY'));
        temperature.push(Math.round(data.list[i].main.temp));
        humidity.push(Math.round(data.list[i].main.humidity));
        windSpeed.push(Math.round(data.list[i].wind.speed));
        atmospherePressure.push(Math.round(data.list[i].main.pressure));
    }
    chartInstance = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [...labels],
            datasets: [
            {
                label: 'Temperature, °C',
                data: temperature,
                fill: false,
                borderColor: 'orange',
                
            },
            {
                label: 'Humidity, %',
                data: humidity,
                fill: false,
                borderColor: 'grey',
                
            },
            {
                label: 'Wind speed, m/s',
                data: windSpeed,
                fill: false,
                borderColor: 'blue',
                
            },
            {
                label: 'Atmosphere pressure, m/m',
                data: atmospherePressure,
                fill: false,
                borderColor: 'lightblue',
                
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
}

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

export { createChart };