// import axios from 'axios';
// // import { forEach, forEachRight } from 'lodash';
// // window.onscroll = function () {
// //   return false;
// // };

// const modalRef = document.querySelector('.modal__description');
// const closeRef = document.querySelector('.button__close');

// closeRef.addEventListener('click', () => {
//   modalRef.classList.add('visually-hidden');
// });

// // axios.defaults.baseURL = 'http://www.thecocktaildb.com/api/json/v1/1';
// // document.addEventListener('DOMContentLoaded', getIngridient);
// // import axios from 'axios';
// // async function getIngridient() {
// //   const ingridient = await axios(
// //     'https://www.thecocktaildb.com/api/json/v1/1/search.php?i=vodka'
// //   );
// //   console.log('ingridient :>> ', ingridient);
// // }

// // const axios = require('axios');

// async function getIngridient() {
//   const request = await axios(
//     'https://www.thecocktaildb.com/api/json/v1/1/search.php?i=bourbon'
//   )
//     .catch(function (error) {
//       // обработка ошибки
//       console.log(error);
//     })
//     .then(({ data: { ingredients } }) => {
//       check(ingredients);
//     });
// }
// getIngridient();

// let a = [];

// async function check(element) {
//   await marcup(element, a);
//   await element.map(e => {
//     for (let key in e) {
//       if (e[key] === null) {
//         console.log('no', key);
//         return;
//       }
//       a.push(key);
//     }
//   });
// }
// console.log('a', a);

// async function marcup(data, a) {
//   console.log('a3333', a);
//   a.forEach(element => {
//     console.log(element);
//   });
//   // console.log('a2', a);
//   // console.log('data', data);
// }

// // const { strABV, strDescription, strType, strIngredient, strAlcohol } = data;
// // console.log('strAlcohol :', strAlcohol);
// // console.log('strIngredient :', strIngredient);
// // console.log('strType :', strType);
// // console.log('strDescription :', strDescription);
// // console.log('strABV :', strABV);

// // const testRef = document.querySelector('.description__span');
// // testRef.insertAdjacentHTML('beforeend', strDescription.substring(0, 400));

import axios from 'axios';

const modalRef = document.querySelector('.modal__description');
const closeRef = document.querySelector('.button__close');
const markupRef = document.querySelector('.markup');

closeRef.addEventListener('click', () => {
  modalRef.classList.add('visually-hidden');
});

async function getIngridient() {
  const request = await axios(
    'https://www.thecocktaildb.com/api/json/v1/1/search.php?i=cola'
  )
    .catch(function (error) {
      // обработка ошибки
      console.log(error);
    })
    .then(({ data: { ingredients } }) => {
      check(ingredients);
    });
}

getIngridient();

async function check(element) {
  const markupString = await marcup(element);
  console.log('1111', markupString);
  markupRef.innerHTML = markupString;
}
async function marcup(data) {
  console.log('data', data);
  return await data
    .map(({ strIngredient, strDescription, strType, strABV }) => {
      let string = '';
      if (strIngredient) {
        string += `<h2 class="description__title">${strIngredient}</h2>`;
      }
      if (strType) {
        string += `<h3 class="description__category">${strType}</h3>`;
      }
      if (strDescription) {
        string += `<p class="description__characteristic">
      ${strDescription.substring(0, 400)}
    </p>`;
      }
      if (strType) {
        string += `<li class="description__list"><span class="description__accent">&#10038</span> Type: ${strType}</li>`;
      }
      if (strABV) {
        string += `<li class="description__list"><span class="description__accent">&#10038</span> Alcohol by volume: ${strABV}</li>`;
      }
      // console.log(string);
      const htmlElem = `${string}`;

      console.log('htmlElem', htmlElem);
      return htmlElem;
    })
    .join('');
}

// <h2 class="description__title">Campari</h2>
// <h3 class="description__category">Liqueur</h3>
// <p class="description__characteristic">
//   <span class="description__span">Campari</span>
// </p>
// <ul class="description__item">
//   <li class="description__list"><span class="description__accent">&#10038</span> Type: Bitters</li>
//   <li class="description__list"><span class="description__accent">&#10038</span> Country of origin: Italy</li>
//   <li class="description__list"><span class="description__accent">&#10038</span> Alcohol by volume: 20.5–28.5%</li>
//   <li class="description__list"><span class="description__accent">&#10038</span> Flavour: Bitter, spicy and sweet</li>
// </ul>

{
  /* <ul class="description__item">
  <li class="description__list">
    <span class="description__accent">&#10038</span> Country of origin: Italy
  </li>

  <li class="description__list">
    <span class="description__accent">&#10038</span> Flavour: Bitter, spicy and
    sweet
  </li>
</ul>; */
}

// strABV: '40';
// ('li>3');
// strAlcohol: 'Yes';
// strDescription: 'Vodka is a '; /// p
// strIngredient: 'Vodka';
// strType: 'Vodka';
