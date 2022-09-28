import axios from 'axios';
// import { getRandomCocktail } from './getCocktailOption';
import * as icons from '../img/sprite.svg';

const cocktailsList = document.querySelector('.gallery__cards');
const preloader = document.querySelector('.preloader');
const section = document.querySelector('.section-gallery');

createCardsListMarkup();

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
    // console.log('randomDrinks', randomDrinks);
    randomDrinks.forEach(drink => {
      let data = drink.data.drinks[0];
      createCardMarkup(data);
    });
  } catch (error) {
    throw new Error(error);
  }
}

function createCardsListMarkup() {
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

function createCardMarkup({ strDrinkThumb, strDrink }) {
  const markup = `<li class='gallery__card'>
     <img src=${strDrinkThumb} alt=${strDrink} class='gallery__card-img'>
     <div class='gallery__card_thumb'>
     <h3 class='gallery__card-name'>${strDrink}</h3>
     <div class='btn__box'>
     <button type='button' class='gallery__btn-load-more' data-open='open-modal-description'>Learn more</button>
      <button type='button' class='gallery__btn-add-to-fav' data-add='add-to-fav'>Add to<svg width="25px" height="25px" class="btn__svg-fav">
      <use  href='${icons}/#icon-heart'></use>
    </svg></button>
      </div>
     </div>
     </li>`;

  cocktailsList.insertAdjacentHTML('beforeend', markup);
  preloader.classList.add('visually-hidden');
  section.classList.remove('gallery__helper');
}

// window.onload = function () {
//   preloader.classList.add('visually-hidden');
// };
