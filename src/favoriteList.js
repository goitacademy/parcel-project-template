// functie verificare lungime ul, in cazul in care este mai mare decat containerul, sageata next /prev devine activa
// functie sageata next
// functie sageata prev
// functie adaugare oras favorit
// functie stergere oras favorit din lista
// functie afisare date la click pe oras favorit

import { Notify } from 'notiflix/build/notiflix-notify-aio';

const favoriteCity = document.querySelector('.search-form__favourite');
const searchCity = document.querySelector('#search-input');
const favouritesList = document.querySelector('.favourites-list');
const nextButton = document.querySelector('.favourite-next');
const prevButton = document.querySelector('.favourite-prev');
const favouritesListItem = document.querySelector('.favourites-list__item');


// nextButton.hidden = true;
// prevButton.hidden = true;



// Markup pentru li orase favorite
function createFavouritesListItem(searchCityName) {
  const li = document.createElement('li');
  li.classList.add('favourites-list__item');
  li.classList.add('close');

  const p = document.createElement('p');
  p.classList.add('favourites-list__item-link');
  p.textContent = searchCityName;

  const button = document.createElement('button');
  button.classList.add('favourites-list__item-close');
  button.setAttribute('type', 'button');

  li.appendChild(p);
  li.appendChild(button);

  return li;

  }

// Adaugare in lista a oraselor favorite
favoriteCity.addEventListener('click', addFavouritesListItems);

function addFavouritesListItems() {
  let searchCityName = searchCity.value;
  // notificare daca este deja in lista + return

  favouritesList.appendChild(createFavouritesListItem(searchCityName));

  // daca lista depaseste marimea containerului ul afiseaza butoane

  // functie sageata next
  nextButton.addEventListener('click', onClickNextBtn);
  function onClickNextBtn(event) {
    favouritesList.scrollLeft += favouritesList.clientWidth * 0.2;

    //  functie sageata prev
    prevButton.addEventListener('click', onClickPrevBtn);
    function onClickPrevBtn(event) {
      favouritesList.scrollLeft -= favouritesList.clientWidth * 0.2;
    }
  }
}

 
favouritesList.addEventListener("click", (event) => {
    event.preventDefault();

  if(event.target.tagName === 'BUTTON') {
    console.log(event.target.parentElement.remove())
   }
 })
