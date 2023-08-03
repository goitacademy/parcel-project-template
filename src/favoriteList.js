//// functie verificare lungime ul, in cazul in care este mai mare decat containerul, sageata next /prev devine activa
//// functie sageata next
//// functie sageata prev
//// functie adaugare oras favorit
//// functie stergere oras favorit din lista
// a ramas doar asta ---->>>functie afisare date la click pe oras favorit

import { Notify } from 'notiflix/build/notiflix-notify-aio';

const favoriteCity = document.querySelector('.search-form__favourite');
const searchCity = document.querySelector('#search-input');
const favouritesList = document.querySelector('.favourites-list');
const nextButton = document.querySelector('.favourite-next');
const prevButton = document.querySelector('.favourite-prev');
const favouritesListItem = document.querySelector('.favourites-list__item');
let savedCities = JSON.parse(localStorage.getItem('savedCities')) || [];

loadFromLocalStorage();

// Markup pentru li orase favorite
// function createFavouritesListItem(searchCityName) {
//   const li = document.createElement('li');
//   li.classList.add('favourites-list__item');
//   li.classList.add('close');

//   const p = document.createElement('p');
//   p.classList.add('favourites-list__item-link');
//   p.textContent = searchCityName;

//   const button = document.createElement('button');
//   button.classList.add('favourites-list__item-close');
//   button.setAttribute('type', 'button');

//   li.appendChild(p);
//   li.appendChild(button);

//   return li;
// }

// Adaugare in lista a oraselor favorite
favoriteCity.addEventListener('click', addFavouritesListItems);

function addFavouritesListItems() {
  let searchCityName = searchCity.value;
  // notificare daca este deja in lista + return
  const data = localStorage.getItem('savedCities');
  const parsedData = JSON.parse(data);
  if (parsedData.indexOf(searchCity.value) !== -1) {
    Notify.info('This city is already marked as favourite');
    return;
  }

  savedCities.push(searchCity.value);
  localStorage.setItem('savedCities', JSON.stringify(savedCities));
  // favouritesList.appendChild(createFavouritesListItem(searchCityName));
  loadFromLocalStorage();
}
// functie sageata next
nextButton.addEventListener('click', onClickNextBtn);
function onClickNextBtn(event) {
  favouritesList.scrollLeft += favouritesList.clientWidth * 0.2;
}
//  functie sageata prev
prevButton.addEventListener('click', onClickPrevBtn);
function onClickPrevBtn(event) {
  favouritesList.scrollLeft -= favouritesList.clientWidth * 0.2;
}

favouritesList.addEventListener('click', event => {
  event.preventDefault();

  if (event.target.tagName === 'BUTTON') {
    event.target.parentElement.remove();
    const listItem = event.target.parentElement.querySelector(
      '.favourites-list__item-link'
    ).textContent;
    removeFromLocalStorage(listItem);
  }
  if (event.target.tagName === 'P') {
    const savedCity = event.target.textContent;
    searchCity.value = savedCity;
  }
});

function loadFromLocalStorage() {
  const data = localStorage.getItem('savedCities');
  const parsedData = JSON.parse(data);
  const markup = parsedData
    .map(item => {
      return `<li class="favourites-list__item close"><p class="favourites-list__item-link">${item}</p><button class="favourites-list__item-close" type="button"></button></li>`;
    })
    .join('');
  favouritesList.innerHTML = markup;
  checkButtons();
}

function removeFromLocalStorage(listItem) {
  const data = localStorage.getItem('savedCities');
  const parsedData = JSON.parse(data);
  const index = parsedData.indexOf(listItem);
  parsedData.splice(index, 1);

  localStorage.setItem('savedCities', JSON.stringify(parsedData));
  checkButtons();
}
function checkButtons() {
  const containerWidth = favouritesList.parentElement.clientWidth;
  const contentWidth = favouritesList.scrollWidth;
  const scrollLeft = favouritesList.scrollLeft;

  const isScrolledRight = scrollLeft < contentWidth - containerWidth;
  const isScrolledLeft = scrollLeft > 0;

  prevButton.style.display = isScrolledLeft ? 'block' : 'none';
  nextButton.style.display = isScrolledRight ? 'block' : 'none';
}

favouritesList.addEventListener('scroll', () => {
  checkButtons();
});
