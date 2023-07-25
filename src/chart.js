const ctx = document.getElementById('myChart').getContext('2d');
new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: 'Temperature',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: 'rgb(255, 107, 9)',
        borderColor: 'rgb(255, 107, 9)',
        borderWidth: 2,
        fill: false,
      },
      {
        label: 'Humidity',
        data: [11, 23, 6, 4, 6, 2],
        backgroundColor: 'rgb(9, 6, 235)',
        borderColor: 'rgb(9, 6, 235)',
        borderWidth: 2,
        fill: false,
      },
      {
        label: 'Wind Speed m/s',
        data: [10, 20, 8, 1, 3, 5],
        backgroundColor: 'rgb(234, 154, 5)',
        borderColor: 'rgb(234, 154, 5)',
        borderWidth: 2,
        fill: false,
      },
      {
        label: 'Atmosphere Pressure, m/m',
        data: [9, 25, 7, 3, 4, 4],
        backgroundColor: 'rgb(6, 120, 6)',
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
