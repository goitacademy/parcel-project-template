import axios from 'axios';
import { toNumber } from 'lodash';
export function openCoctaileInfoModal() {
  const favoriteBtn = document.querySelectorAll('[data-moreId]');
  favoriteBtn.forEach(btn => btn.addEventListener('click', showModal));
}

const modalAnc = document.querySelector('.modal__description');

async function showModal(e) {
  const coctaileId = e.target.dataset.moreid;
  const response = await axios.get(
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${coctaileId}`
  );
  const dataObj = await response.data.drinks[0];
  const markupString = await objToString(dataObj);
  console.log(dataObj);

  modalAnc.insertAdjacentHTML('beforeend', markupString);
  const closeBtn = modalAnc.querySelector('.btn--close');
  document.body.classList.add('disable-scroll');
  closeBtn.addEventListener('click', e => {
    e.currentTarget.closest('.backdrop__cocktail').remove();
    document.body.classList.remove('disable-scroll');
  });
}
function objToString(obj) {
  const { strDrink, strInstructions, strDrinkThumb } = obj;
  const array = Object.keys(obj);
  const filterArray = array
    .filter(key => !isNaN(+key[key.length - 1]))
    .map(key => obj[key])
    .filter(data => data);

  const ingridients = [];

  for (let i = 0; i < filterArray.length / 2; i++) {
    ingridients.push([filterArray[i], filterArray[filterArray.length - 1 - i]]);
  }

  const stringLi = ingridients
    .map(([ingridient, amount]) => {
      return `<li class="ingredient__item">
              <span class="ingredient__accent">✶</span>
              <span>${amount}</span>
              <a class="link ingredient-link" data-type="" data-name="Ice"
                >${ingridient}</a
              >
            </li>`;
    })
    .join('');
  return `<div class="backdrop__cocktail" data-modal>
  <div class="modal__cocktail">
    <button type="button" class="btn--close" data-modal="close-cocktail">
    </button>
    <h2 class="cocktail__name cocktail__name--mobile">${strDrink}</h2>
    <div class="modal__form">
      <div class="instraction__wrap">
        <h3 class="cocktail__title">Instractions:</h3>
        <p class="recipe__text">
          ${strInstructions}
        </p>
      </div>
      <div class="image__wrap"><img src='${strDrinkThumb}'></img></div>
      <div class="ingredients__wraper">
        <div class="recipe__wrapper">
          <h2 class="cocktail__name cocktail__name--big">${strDrink}</h2>
          <h4 class="recipe__title">INGREDIENTS</h4>
          <p class="cocktail__text">Per cocktail</p>
          <ul class="ingredient">
           ${stringLi}
            </li>
          </ul>
        </div>
      </div>
      <div class="cocktail__modal-btn">
        <button type="button" class="modal__btn">Add to favorite</button>
      </div>
    </div>
  </div>
</div>`;
}
