import axios from 'axios';
import { forEach, forEachRight } from 'lodash';
// window.onscroll = function () {
//   return false;
// };

const modalRef = document.querySelector('.modal__description');
const closeRef = document.querySelector('.button__close');

closeRef.addEventListener('click', () => {
  modalRef.classList.add('visually-hidden');
});

// axios.defaults.baseURL = 'http://www.thecocktaildb.com/api/json/v1/1';
// document.addEventListener('DOMContentLoaded', getIngridient);
// import axios from 'axios';
// async function getIngridient() {
//   const ingridient = await axios(
//     'https://www.thecocktaildb.com/api/json/v1/1/search.php?i=vodka'
//   );
//   console.log('ingridient :>> ', ingridient);
// }

// const axios = require('axios');

async function getIngridient() {
  const request = await axios(
    'https://www.thecocktaildb.com/api/json/v1/1/search.php?i=bourbon'
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

let a = [];

async function check(element) {
  marcup(element, a);
  await element.map(e => {
    for (let key in e) {
      if (e[key] === null) {
        console.log('no', key);
        return;
      }
      a.push(key);
    }
  });
}
console.log('a', a);

async function marcup(data, a) {
  for (const key of a) {
    console.log(' key', key);
    await data.map(([key]) => {
      data[key];
      console.log('key', key);
    });
  }
  console.log('data', data);
}

// const { strABV, strDescription, strType, strIngredient, strAlcohol } = data;
// console.log('strAlcohol :', strAlcohol);
// console.log('strIngredient :', strIngredient);
// console.log('strType :', strType);
// console.log('strDescription :', strDescription);
// console.log('strABV :', strABV);

// const testRef = document.querySelector('.description__span');
// testRef.insertAdjacentHTML('beforeend', strDescription.substring(0, 400));
