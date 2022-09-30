// import { BASE_URL, getCocktailByLette } from './getCocktailOption';
// import  picture  from '../img/pictures/desktop/empty_page_345x380.png';
import {cocktailsList, createCardsListMarkup, preloader, section} from './getRandomCoctails'
import Notiflix from 'notiflix';

import axios from 'axios';

const BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1/';

export default class CocktailAPI {
    KEY = 'cocktails';
    INGREDIENTS = 'ingredients';
    constructor() {
        this.iid = [];
        this.name = '';
        this.letter = '';
        this.page = 1;
        this.drinks = '';
        this.searchQuery = '';
        this.category = '';
        this.drinks = '';
        this.ingredients = [];
        this.favoriteDrinks = [];
        this.favoriteIngredients = [];
    }
}

//  ====>> by Letter

async function getCocktailByLetter (letter) {
    try {
        const response = await axios(`${BASE_URL}search.php?f=${letter}`);
        if (!response.data) {
            console.log(response);
            throw new Error(response);
        }
        return response.data;
    } catch (error) {
      Notiflix.Notify.failure('Ooops, error!');
    }
}

console.log(BASE_URL);

const keyboardItemEl = document.querySelector('[data-action="keyboard"]');
const titleRef = document.querySelector('.gallery__title');
const sorryCardEl = document.querySelector('.sorry-card');

let letter = '';

keyboardItemEl.addEventListener('click', onLetterClick);

function onLetterClick(event) {
    event.preventDefault();

    letter = (event.target.dataset.id);
    
    console.log(letter);
    // letter.classList.add('keyboard--item--black')
   
    cocktailData(letter);

}

async function cocktailMarkupList(arr) {
    return arr.map(({ strDrinkThumb, strDrink, idDrink  }) => {
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
        return markup;
    })
    
}

async function drinksLetterCocktail(arr) { 
    let drinks = [];
     if (document.documentElement.clientWidth >= 1280) {
         drinks = arr.splice(0, 9);
        
  } else if (
    document.documentElement.clientWidth >= 768 &&
    document.documentElement.clientWidth < 1280
  ) {
    drinks = arr.splice(0, 6);
  } else if (
    document.documentElement.clientWidth > 0 &&
    document.documentElement.clientWidth < 768
  ) {
    drinks = arr.splice(0, 3); 
     }
    return drinks;
}

async function cocktailData(letter) {

    try {
        titleRef.classList.remove('visually-hidden');
        sorryCardEl.classList.add('visually-hidden');
         const data = await getCocktailByLetter(letter);
         if (!data?.drinks) {
        console.log (data)
        
             removeMarkup(cocktailsList);
             titleRef.classList.add('visually-hidden');
             sorryText()
            Notiflix.Notify.failure('Unfortunately, such a cocktail is not available.');
              throw new Error(response);
        }
      
        const markupDrink = await drinksLetterCocktail(data.drinks);
        console.log(markupDrink)
     
        const drinkU = await cocktailMarkupList(markupDrink);

        cocktailsList.innerHTML = await drinkU.join('');
        titleRef.textContent = 'Searching results';
        } catch (error) {
         
        };
    };

function sorryText() {
    removeMarkup(cocktailsList);
    sorryCardEl.classList.remove('visually-hidden');
}

function removeMarkup(element) {
    element.innerHTML = '';
};
