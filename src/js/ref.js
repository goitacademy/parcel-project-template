const searchInput = document.querySelector('.search-location__form');
const backgroundWrapper = document.querySelector('.background-wrapper');
const addToLocalStorageBtn = document.querySelector(
  '.search-location__form-btn'
);
const form = document.querySelector('.search');
const listOfButtons = document.querySelector('.btn-list');
const btnPrev = document.querySelector('#left-arrow'); // Updated arrow IDs
const btnNext = document.querySelector('#right-arrow'); // Updated arrow IDs
const btnShowChart = document.querySelector('.show-chart-btn-js');
const btnHideChart = document.querySelector('.hide-chart-btn-js');
const headerOfShowChart = document.querySelector('.show-chart-header-js');
const headerOfHideChart = document.querySelector('.hide-chart-header-js');
const boxOfShowChart = document.querySelector('.show-chart-box');
const chartBox = document.querySelector('.chart-box');
const btnFiveDays = document.querySelectorAll('.five-day-button');
const btnToday = document.querySelectorAll('.today-button');
const btnOneDay = document.querySelectorAll('.btn-today-js');
const contentBox = document.querySelector('.today-box');
const part6 = document.querySelector('.moreInfo');
const dateSunriseTime = document.querySelector('.date__sunrise--time');
const dateSunsetTime = document.querySelector('.date__sunset--time');
const daysFiveListblock = document.querySelector('.days-list');
const moreInfoBlock = document.querySelector('.moreInfo__block');
const part2City = document.querySelector('.today-city');
const fiveDaysContaineerCityName = document.querySelector(
  '.five-days-containeer__city-name'
);
const todayContainer = document.querySelector('.weather-card');
const weatherEl = document.querySelector('.weather');
const timesectionEl = document.querySelector('.time-section');
const containerquotesEl = document.querySelector('.container-quotes');
const fiveDaysContainer = document.querySelector('.five-days-container');
const moreInfoBtn = document.querySelectorAll('.moreInfo_scroll_arrow');
const fiveDaysButton = document.querySelector('.five-day-button');
const sliderEl = document.querySelector('.slider');
const chartContainer = document.querySelector('.chart-container');

export default {
  searchInput,
  backgroundWrapper,
  addToLocalStorageBtn,
  form,
  listOfButtons,
  btnPrev,
  btnNext,
  btnShowChart,
  btnHideChart,
  headerOfShowChart,
  headerOfHideChart,
  boxOfShowChart,
  chartBox,
  btnFiveDays,
  btnOneDay,
  contentBox,
  part6,
  dateSunriseTime,
  dateSunsetTime,
  daysFiveListblock,
  moreInfoBlock,
  part2City,
  fiveDaysContaineerCityName,
  todayContainer,
  fiveDaysContainer,
  moreInfoBtn,
  fiveDaysButton,
  weatherEl,
  timesectionEl,
  containerquotesEl,
  btnToday,
  sliderEl,
  chartContainer,
};
