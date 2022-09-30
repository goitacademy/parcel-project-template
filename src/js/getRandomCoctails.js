import axios from 'axios';

export const cocktailsList = document.querySelector('.gallery__cards');
export const preloader = document.querySelector('.preloader');
export const section = document.querySelector('.section-gallery');
const width = document.documentElement.clientWidth;

let randomDrinks = [];

async function fetchRandomCockteil(n) {
  try {
    for (let i = 0; i < n; i += 1) {
      randomDrinks.push(
        await axios.get(
          `https://www.thecocktaildb.com/api/json/v1/1/random.php`
        )
      );
    }
  } catch (error) {
    throw new Error(error);
  }

  getUniqueObj();
}

function getUniqueObj() {
  const cocktailsUnique = randomDrinks.reduce(
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
    const data = drink.data.drinks[0];
    createCardMarkup(data);
  });

  console.log('rundomDrinks', randomDrinks);
  console.log('unique', cocktailsUnique);

  return cocktailsUnique;
}

if (width >= 1280) {
  fetchRandomCockteil(9);
} else if (width >= 768 && width < 1280) {
  fetchRandomCockteil(6);
} else if (width > 0 && width < 768) {
  fetchRandomCockteil(3);
}

export function createCardMarkup({ strDrinkThumb, strDrink }) {
  const markup = `<li class='gallery__card'>
    <img src=${strDrinkThumb} alt=${strDrink} class='gallery__card-img'>
    <div class='gallery__card_thumb'>
    <h3 class='gallery__card-name'>${strDrink}</h3>
    <div class='btn__box'>
    <button type='button' class='gallery__btn-load-more' data-open='open-modal-description'>Learn more</button>
     <button type='button' class='gallery__btn-add-to-fav' data-add='add-to-fav'>Add to</button>
     </div>
    </div>
    </li>`;

  cocktailsList.insertAdjacentHTML('beforeend', markup);
  preloader.classList.add('visually-hidden');
  section.classList.remove('gallery__helper');
}
