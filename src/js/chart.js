document.addEventListener('DOMContentLoaded', () => {
  const chartSection = document.querySelector('.chart');
  const hideChartButton = document.querySelector('.hide-chart-button__btn');

  hideChartButton.addEventListener('click', () => {
    console.log('Button clicked');
    chartSection.classList.toggle('hidden-chart');
  });
});
