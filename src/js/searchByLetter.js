// import { BASE_URL, getCocktailByLette } from './getCocktailOption';
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

async function getCocktailByLetter(letter) {
    try {
      return await axios(`${BASE_URL}search.php?f=${this.letter}`);
    } catch (error) {
      alert(error);
    }
  }

  

console.log(BASE_URL);

const keyboardItemEl = document.querySelector('.keyboard');
let searchValue;

keyboardItemEl.addEventListener('click', onLetterClick);

function onLetterClick(event) {
    event.preventDefault();

    // removeMarkup(???)

    searchValue = (event.target.textContent);
    searchValue = searchValue.toLowerCase();
    
    let letter = searchValue;
    console.log(searchValue);

    cocktailData(searchValue);
}

async function cocktailData(letter) {
    try {
        const data = await getCocktailByLetter(letter);
      
        if (data.hits.length === 0) {
            Notiflix.Notify.failure('Sorry, there are no images matching your search query. Please try again.');
        } else {
            Notiflix.Notify.info(`Hooray! We found ${data.totalHits} images.`);
        }
      
        // Вставить функцию создающую коктейли в галлереии
        //   createGalleryMarkup(data.hits);
       
    
        } catch (error) {
          Notiflix.Notify.failure('Ooops, Error!');
        };
    };


function removeMarkup(element) {
    element.innerHTML = '';
};

