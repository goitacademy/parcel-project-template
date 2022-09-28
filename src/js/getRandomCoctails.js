const cocktailsList = document.querySelector('.gallery__cards');

async function fetchRandomCockteil(n) {
  let arr = [];
  for (let i = 0; i < n; i += 1) {
    arr.push(
      await (
        await fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
      ).json()
    );
  }
  const randomDrinks = await Promise.all(arr);
  console.log(randomDrinks);
  randomDrinks.forEach(drink => {
    console.log('KAIYHBK', drink.drinks);
    createCardMarkup(drink.drinks[0]);
  });
  // {
  // createCardMarkup(drink);
  //   }
  // return;
  // return drink;
  // }
  // if (!response.ok) {
  //   throw new Error('no data loaded!');
  // }
  // return await response.json();
}

createCardsListMarkup();
// createCardMarkup(fetchRandomCockteil());

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
     <div>
     <button class='gallery__btn-load-more' data-open='open-modal-description'>Learn more</button>
      <button class='gallery__btn-add-to-fav' data-add='add-to-fav'>Add to</button>
      </div>
     </div>
     </li>`;

  cocktailsList.insertAdjacentHTML('beforeend', markup);
}

// function createCardMarkup(drinksArr) {
//   const markup = drinksArr
//     .map(
//       ({ strDrinkThumb, strDrink }) => `<li class='gallery__card'>
//      <img src=${strDrinkThumb} alt=${strDrink} class='gallery__card-img'>
//      <div class='gallery__card_thumb'>
//      <h3 class='gallery__card-name'>${strDrink}</h3>
//      <div>
//      <button class='gallery__btn-load-more' data-open='open-modal-description'>Learn more</button>
//       <button class='gallery__btn-add-to-fav' data-add='add-to-fav'>Add to</button>
//       </div>
//      </div>
//      </li>`
//     )
//     .join('');

//   cocktailsList.insertAdjacentHTML('beforeend', markup);
// }
