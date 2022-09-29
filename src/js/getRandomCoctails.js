import axios from 'axios';
// import { getRandomCocktail } from './getCocktailOption';
// import * as icons from '../img/sprite.svg';

export const cocktailsList = document.querySelector('.gallery__cards');
export const preloader = document.querySelector('.preloader');
export const section = document.querySelector('.section-gallery');

createCardsListMarkup();
addUniqueCardMarkup();

async function fetchRandomCockteil(n) {
  try {
    let arr = [];
    for (let i = 0; i < n; i += 1) {
      arr.push(
        await axios(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
      );
    }
    const randomDrinks = await Promise.all(arr).then(r => {
      return r;
    });
    let cocktailsUnique = randomDrinks.reduce(
      (acc, cocktail) => {
        if (acc.map[cocktail.data.drinks[0].idDrink]) return acc;
        acc.map[cocktail.data.drinks[0].idDrink] = true;
        acc.cocktailsUnique.push(cocktail);
        return acc;
      },
      {
        map: {},
        cocktailsUnique: [],
      }
    ).cocktailsUnique;
    cocktailsUnique.forEach(drink => {
      let data = drink.data.drinks[0];
      console.log('data', data);
      createCardMarkup(data);
    });
  } catch (error) {
    throw new Error(error);
  }
}

function createCardsListMarkup(data) {
  if (document.documentElement.clientWidth >= 1280) {
    fetchRandomCockteil(9);
  } else if (
    document.documentElement.clientWidth >= 768 &&
    document.documentElement.clientWidth < 1280
  ) {
    fetchRandomCockteil(6);
  } else if (
    document.documentElement.clientWidth > 0 &&
    document.documentElement.clientWidth < 768
  ) {
    fetchRandomCockteil(3);
  }
}

export function createCardMarkup({ strDrinkThumb, strDrink, idDrink }) {
  const markup = `<li class='gallery__card'>
     <img src=${strDrinkThumb} alt=${strDrink} class='gallery__card-img'>
     <div class='gallery__card_thumb'>
     <h3 class='gallery__card-name'>${strDrink}</h3>
     <div class='btn__box'>
     <button type='button' class='gallery__btn-load-more' data-open='open-modal-description'>Learn more</button>
    <button type='button' class='gallery__btn-add-to-fav' data-add='add-to-fav' data-cocktaileId='${idDrink}'>Add to</button>
      </div>
     </div>
     </li>`;

  cocktailsList.insertAdjacentHTML('beforeend', markup);
  preloader.classList.add('visually-hidden');
  section.classList.remove('gallery__helper');
}

function addUniqueCardMarkup() {
  setTimeout(() => {
    console.log(cocktailsList.children.length);
    if (
      document.documentElement.clientWidth >= 1280 &&
      cocktailsList.children.length < 9
    ) {
      fetchRandomCockteil(9 - cocktailsList.children.length);
    } else if (
      document.documentElement.clientWidth >= 768 &&
      document.documentElement.clientWidth < 1280 &&
      cocktailsList.children.length < 6
    ) {
      fetchRandomCockteil(6 - cocktailsList.children.length);
    } else if (
      document.documentElement.clientWidth > 0 &&
      document.documentElement.clientWidth < 768 &&
      cocktailsList.children.length < 3
    ) {
      fetchRandomCockteil(3 - cocktailsList.children.length);
    }
  }, 1000);
}
