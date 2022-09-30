import axios from 'axios';
import {
  createCardMarkup,
  cocktailsList,
  preloader,
  section,
} from './getRandomCoctails';
const desktopFormRef = document.querySelector('.js-form-desktop');
const mobilFormRef = document.querySelector('.js-form-mobil');
const titleRef = document.querySelector('.gallery__title');

desktopFormRef.addEventListener('submit', onFormSubmit);
mobilFormRef.addEventListener('submit', onFormSubmit);

let dataFromInput = '';
// ============================================
function onFormSubmit(evt) {
  evt.preventDefault();
  if (
    window.location.href.includes('ingredients') ||
    window.location.href.includes('coctails')
  ) {
    window.location.href = '../index.html';
  }
  cocktailsList.innerHTML = '';
  dataFromInput = evt.target.input.value.trim();

  fetchCockteilByName(dataFromInput);

  titleRef.scrollIntoView(true);
}
// ============================================

function fetchCockteilByName(name) {
  const cocteils = axios(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`
  );
  cocteils.then(resp => {
    const drinks = resp.data.drinks;
    console.log(drinks);
    if (!drinks) {
      titleRef.textContent = "Sorry, we didn't find any cocktail for you";
    } else {
      titleRef.textContent = 'Searching results';
      drinks.map(drink => createCardMarkup(drink));
    }
  });

  return cocteils;
}
