const openBtn5Days = document.getElementById('5days-btn');
let hiddenItems = document.querySelectorAll('.is-hidden');
const todayBtn = document.getElementById('today-btn');
let fiveDaysSection = document.querySelector('.five-days');
let todaySection = document.querySelector('.allday-wheather');
const city = document.querySelector('.city');
const quote = document.querySelector('.quote');
const dateSection = document.querySelector('.dayli-container');
const showChart = document.querySelector('.show-chart');
openBtn5Days.addEventListener('click', open5Days);
function open5Days() {
  hiddenItems.forEach(function (item) {
    item.classList.remove('is-hidden');
  });
  fiveDaysSection.classList.remove('is-hidden');
  city.classList.remove('is-hidden');
  todaySection.classList.add('is-hidden');
  quote.classList.add('is-hidden');
  dateSection.classList.add('is-hidden');
  showChart.classList.remove('is-hidden');
}
todayBtn.addEventListener('click', showToday);
function showToday() {
  fiveDaysSection.classList.add('is-hidden');
  todaySection.classList.remove('is-hidden');
  city.classList.add('is-hidden');
  quote.classList.remove('is-hidden');
  dateSection.classList.remove('is-hidden');
  showChart.classList.add('is-hidden');
}
