const cocktailsList = document.querySelector('.gallery__cards');

async function fetchRundomCockteil() {
  // let arr = [];
  // for (let i = 0; i < 9; i += 1) {
  //   const cocktail = await fetch(
  //     `https://www.thecocktaildb.com/api/json/v1/1/random.php`
  //   );
  //   arr.push(cocktail);
  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/random.php`
  );
  if (!response.ok) {
    throw new Error('no data loaded!');
  }
  return await response.json();
}
// }

createCardsListMarkup();

function getRundomCoctailData() {
  fetchRundomCockteil()
    .then(data => {
      console.log('data.drinks', data.drinks);
      let dataArr = [];
      // let all = data;
      // dataArr.push(PromiseAll);
      createCardMarkup(data.drinks);
    })
    .catch(err => {
      console.log('error!!!!!');
    });
}

function createCardsListMarkup() {
  if (document.documentElement.clientWidth >= 1280) {
    for (let i = 0; i < 9; i++) {
      getRundomCoctailData();
    }
  } else if (
    document.documentElement.clientWidth >= 768 &&
    document.documentElement.clientWidth < 1280
  ) {
    for (let i = 0; i < 6; i++) {
      getRundomCoctailData();
    }
  } else if (
    document.documentElement.clientWidth > 0 &&
    document.documentElement.clientWidth < 768
  ) {
    for (let i = 0; i < 3; i++) {
      getRundomCoctailData();
    }
  }
}

function createCardMarkup(drinksArr) {
  const markup = drinksArr
    .map(
      ({ strDrinkThumb, strDrink }) => `<li class='gallery__card'>
     <img src=${strDrinkThumb} alt=${strDrink} width="280" height='280' class='gallery__card-img'>
     <div class='gallery__card_thumb'>
     <h3 class='gallery__card-name'>${strDrink}</h3>
     <div>
     <button class='gallery__btn-load-more' data-open='open-modal-description'>Learn more</button>
      <button class='gallery__btn-add-to-fav' data-add='add-to-fav'>Add to</button>
      </div>
     </div>
     </li>`
    )
    .join('');

  cocktailsList.insertAdjacentHTML('beforeend', markup);
}
