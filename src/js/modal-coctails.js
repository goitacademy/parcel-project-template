import axios from 'axios';
import { wrireRemovetCoctaileFunction } from '../coctails';

export function openCoctaileInfoModal(selector) {
  const favoriteBtn = document.querySelectorAll(selector);
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

  modalAnc.insertAdjacentHTML('beforeend', markupString);
  document.body.classList.add('disable-scroll');

  const closeBtn = modalAnc.querySelector('.btn--close');
  const addFavBtn = modalAnc.querySelector('.modal__btnJS');
  const backdrop = modalAnc.querySelector('.backdrop__cocktail');

  backdrop.addEventListener('click', closeBybackdrop);

  addFavBtn.focus();
  wrireRemovetCoctaileFunction('.modal__btnJS');
  document.addEventListener('keydown', closeMoreModalByKeyboard);
  closeBtn.addEventListener('click', closeMoreModal);
}

function closeBybackdrop(e) {
  if (e.currentTarget === e.target) {
    e.target.remove();
    document.body.classList.remove('disable-scroll');
  }
}

function closeMoreModalByKeyboard(e) {
  if (e.code === 'Escape') {
    document.querySelector('.backdrop__cocktail').remove();
    document.body.classList.remove('disable-scroll');
  }
}

function closeMoreModal(e) {
  e.currentTarget.closest('.backdrop__cocktail').remove();
  document.body.classList.remove('disable-scroll');
}

function objToString(obj) {
  const { strDrink, strInstructions, strDrinkThumb, idDrink } = obj;
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
      return `<li class="ingredient__item" data-ingridientname='${ingridient}'>
              <span class="ingredient__accent">✶</span>
              <span>${amount}</span>
              <a class="link ingredient-link"
                >${ingridient}</a
              >
            </li>`;
    })
    .join('');
  return `<div class="backdrop__cocktail" data-modal>
  <div class="modal__cocktail">
    <button type="button" autofocus class="btn--close" data-modal="close-cocktail">
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
        <button type="button" class="modal__btn modal__btnJS" data-cocktaileid='${idDrink}'>Add to favorite</button>
      </div>
    </div>
  </div>
</div>`;
}
