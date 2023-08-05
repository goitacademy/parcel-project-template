const searchInput = document.querySelector('.search-location__form');
const backgroundWrapper = document.querySelector('.background-wrapper');
const addToLocalStorageBtn = document.querySelector(
  '.search-location__form-btn'
);
const form = document.querySelector('.search-form');
const listOfButtons = document.querySelector('.btn-list');
const btnPrev = document.querySelector('#left-arrow'); // Updated arrow IDs
const btnNext = document.querySelector('#right-arrow'); // Updated arrow IDs
const btnShowChart = document.querySelector('.show-chart-btn-js');
const btnHideChart = document.querySelector('.hide-chart-btn-js');
const headerOfShowChart = document.querySelector('.show-chart-header-js');
const headerOfHideChart = document.querySelector('.hide-chart-header-js');
const boxOfShowChart = document.querySelector('.show-chart-box');
const chartBox = document.querySelector('.chart-box');
const btnFiveDays = document.querySelectorAll('.btn-5-days-js');
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
const todayContainer = document.querySelector('.weather-card'); // Updated class name
const fiveDaysContainer = document.querySelector('.five-days-container');
const moreInfoBtn = document.querySelectorAll('.moreInfo_scroll_arrow');
const fiveDaysButton = document.querySelector('.five-day-button');

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
};

// This code defines a JavaScript object that contains references to various DOM elements selected using `document.querySelector()`. The object serves as a way to organize and store these references for easier access and manipulation in the code.

// 1. It uses `document.querySelector()` to select DOM elements based on their class names, and it assigns those elements to corresponding variables.

// 2. The selected elements are then assigned as properties of the object, using meaningful names that represent their purpose in the application.

// 3. The `export default` statement is used to export the object. This allows other modules or scripts to import and use these DOM element references.

// Here's a summary of the properties in the exported object and their corresponding selected DOM elements:

// - `searchInput`: Represents the DOM element with the class `.search-location__form`.
// - `backgroundWrapper`: Represents the DOM element with the class `.background-wrapper`.
// - `addToLocalStorageBtn`: Represents the DOM element with the class `.search-location__form-btn`.
// - `form`: Represents the DOM element with the class `.search-form`.
// - `listOfButtons`: Represents the DOM element with the class `.search-location__slider-list`.
// - `btnPrev`: Represents the DOM element with the class `.search-location__slider-btnPrev`.
// - `btnNext`: Represents the DOM element with the class `.search-location__slider-btnNext`.
// - `btnShowChart`: Represents the DOM element with the class `.show-chart-btn-js`.
// - `btnHideChart`: Represents the DOM element with the class `.hide-chart-btn-js`.
// - `headerOfShowChart`: Represents the DOM element with the class `.show-chart-header-js`.
// - `headerOfHideChart`: Represents the DOM element with the class `.hide-chart-header-js`.
// - `boxOfShowChart`: Represents the DOM element with the class `.show-chart-box`.
// - `chartBox`: Represents the DOM element with the class `.chart-box`.
// - `btnFiveDays`: Represents a NodeList containing all DOM elements with the class `.btn-5-days-js`.
// - `btnOneDay`: Represents a NodeList containing all DOM elements with the class `.btn-today-js`.
// - `contentBox`: Represents the DOM element with the class `.today-box`.
// - `part6`: Represents the DOM element with the class `.moreInfo`.
// - `dateSunriseTime`: Represents the DOM element with the class `.date__sunrise--time`.
// - `dateSunsetTime`: Represents the DOM element with the class `.date__sunset--time`.
// - `daysFiveListblock`: Represents the DOM element with the class `.days-list`.
// - `moreInfoBlock`: Represents the DOM element with the class `.moreInfo__block`.
// - `part2City`: Represents the DOM element with the class `.today-city`.
// - `fiveDaysContaineerCityName`: Represents the DOM element with the class `.five-days-containeer__city-name`.
// - `todayContainer`: Represents the DOM element with the class `.today-container`.
// - `fiveDaysContainer`: Represents the DOM element with the class `.five-days-container`.
// - `moreInfoBtn`: Represents a NodeList containing all DOM elements with the tag name `moreInfo_scroll_arrow`. (Note: This may be a typo, as `moreInfo_scroll_arrow` should probably be a class name instead of a tag name.)

// By organizing these references in an object, the code makes it easier to access and manipulate the selected DOM elements throughout the application, and it helps improve code readability and maintainability.
