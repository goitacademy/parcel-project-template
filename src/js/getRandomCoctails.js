const cocktailsList = document.querySelector('.gallery__cards');

async function fetchRundomCockteil() {
  const rundomArr = [];
  if (document.documentElement.clientWidth >= 1280) {
    for (let i = 0; i < 9; i++) {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/random.php`
      );
      rundomArr.push(response);
    }
  }
  if (!response.ok) {
    throw new Error('no data loaded!');
  }

  console.log('rundomArr', rundomArr);
  // return await response.json();
}
getRundomCoctailData();
// createCardsListMarkup();

function getRundomCoctailData() {
  fetchRundomCockteil()
    .then(data => {
      console.log('data.drinks', data.drinks);
      createCardMarkup(data.drinks);
    })
    .catch(err => {
      console.log('error!!!!!');
    });
}

// function createCardsListMarkup() {
//   if (document.documentElement.clientWidth >= 1280) {
//     for (let i = 0; i < 9; i++) {
//       getRundomCoctailData();
//     }
//   } else if (
//     document.documentElement.clientWidth >= 768 &&
//     document.documentElement.clientWidth < 1280
//   ) {
//     for (let i = 0; i < 6; i++) {
//       getRundomCoctailData();
//     }
//   } else if (
//     document.documentElement.clientWidth > 0 &&
//     document.documentElement.clientWidth < 768
//   ) {
//     for (let i = 0; i < 3; i++) {
//       getRundomCoctailData();
//     }
//   }
// }

function createCardMarkup(drinksArr) {
  const markup = drinksArr
    .map(
      ({ strDrinkThumb, strDrink }) => `<li class='gallery__card'>
     <img src=${strDrinkThumb} alt=${strDrink} width="280" height='280' class='gallery__card-img'>
     <div class='gallery__card_thumb'>
     <h3 class='gallery__card-name'>${strDrink}</h3>
     <div>
     <button class='gallery__btn-load-more' data-open='open-modal-description'>Learn more</button>
      <button class='gallery__btn-add-to-fav' data-add='add-to-fav'>Add to
       <svg class="icon-modal-cocktail" height="32" width="32">
        <use href="../img/sprite.svg/#icon-heart"></use>
       </svg></button>
      </div>
     </div>
     </li>`
    )
    .join('');

  // return markup;
  cocktailsList.insertAdjacentHTML('beforeend', markup);
}
