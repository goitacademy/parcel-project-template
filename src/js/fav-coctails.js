import axios from 'axios';
import { removeUserCoctaile } from '../servise/firebase';

const favCoctailesList = document.querySelector('.favorite__coctails');

export async function parseFavCoctails(array) {
  const getCocktailesData = await array.map(id =>
    axios(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
  );
  const response = await Promise.all(getCocktailesData);
  if (response.length > 0) {
    const responseData = response.map(obj => obj.data.drinks[0]);
    const htmlStringMarkup = responseData
      .map(obg => getHtmlString(obg))
      .join('');
    if (favCoctailesList) {
      favCoctailesList.innerHTML = htmlStringMarkup;
      removeFromFav();
    }
  }
}

function getHtmlString({ idDrink, strDrinkThumb, strDrink }) {
  return `<li class='gallery__card'>
     <img src=${strDrinkThumb} alt=${strDrink} class='gallery__card-img'>
     <div class='gallery__card_thumb'>
     <h3 class='gallery__card-name'>${strDrink}</h3>
     <div class='btn__box'>
     <button type='button' class='gallery__btn-load-more' data-open='open-modal-description'>Learn more</button>
    <button type='button' class='gallery__btn-add-to-fav' data-add='add-to-fav' data-cocktaileId='${idDrink}'>Remove</button>
      </div>
     </div>
     </li>`;
}

function removeFromFav() {
  const favoriteBtn = document.querySelectorAll('[data-cocktaileId]');
  favoriteBtn.forEach(btn =>
    btn.addEventListener(
      'click',
      e => {
        const button = e.target.dataset.cocktaileid;
        const card = e.target.closest('.gallery__card');
        card.remove();
        removeUserCoctaile(button);
      },
      {
        once: true,
      }
    )
  );
}
