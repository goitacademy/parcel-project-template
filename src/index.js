// import './css/styles.css';
// import debounce from 'lodash.debounce';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import { fetchCountries } from './fetchCountries';
// import Notiflix from 'notiflix';

// const DEBOUNCE_DELAY = 300;

// const refs = {
//   input: document.querySelector('#search-box'),
//   countryList: document.querySelector('.country-list'),
//   countryInfo: document.querySelector('.country-info'),
// };

// refs.input.addEventListener('input', debounce(onInputType, DEBOUNCE_DELAY));

// function onInputType(e) {
//   let inputQuery = e.target.value.trim();

//   clearMarkup();

//   if (inputQuery !== '') {
//     fetchCountries(inputQuery)
//       .then(countries => {
//         if (countries.length > 10) {
//           Notiflix.Notify.info(
//             'Too many matches found. Please enter a more specific name.'
//           );
//         } else if (countries.length >= 2 && countries.length <= 10) {
//           createCoutryList(countries);
//         } else if (countries.length === 0) {
//           Notiflix.Notify.failure('Oops, there is no country with that name');
//         } else if (countries.length === 1) {
//           createCountryInfo(countries);
//         }
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   }
// }

// function createCoutryList(countries) {
//   const markup = countries
//     .map(({ flags, name }) => {
//       return `
//         <li>
//             <img src="${flags.svg}" alt="Flag of ${name.common} width="30" height="20"> <p>${name.common}</p>
//         </li>`;
//     })
//     .join('');
//   refs.countryList.innerHTML = markup;
// };

// function createCountryInfo(countries) {
//   const markup = countries
//     .map(({ flags, name, capital, population, languages }) => {
//       return `
//         <h1><img src="${flags.svg}" alt="Flag of ${
//         name.common
//       } width="30" height="20">${name.common}</h1>
//         <p><b>Capital</b>: ${capital}</p>
//         <p><b>Population</b>: ${population}</p>
//         <p><b>languages</b>: ${Object.values(languages)}</p>`;
//     })
//     .join('');
//   refs.countryList.innerHTML = markup;
// };

// function clearMarkup() {
//   refs.countryList.innerHTML = '';
//   refs.countryInfo.innerHTML = '';
// };

import './css/styles.css';

const DEBOUNCE_DELAY = 300;
