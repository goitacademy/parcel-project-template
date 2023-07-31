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

// nextButton.hidden = true;
// prevButton.hidden = true;


// Markup pentru li orase favorite
function createFavouritesListItem(searchCityName) {
  const li = document.createElement('li');
  li.classList.add('favourites-list__item');

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

  // daca lista depaseste marimea containerului ul afiseaza butoanele

//   let containerWidth = document.documentElement.clientWidth;
//   let lenghtListChild = favouritesList.children.length;
//   favoriteButton++;
//   if (favoriteButton > lenghtListChild - 3 && containerWidth < 770) {
//     nextButton.hidden = true;
//   } else if (
//     favoriteButton > lenghtListChild - 5 &&
//     clientcontainerWidth > 771
//   ) {
//     nextButton.hidden = true;
//   }

//   prevButton.hidden = false;
//   chosenFavoritesCities.forEach(li => {
//     li.style.transform += 'translateX(-113px)';
//     li.style.transitionDuration = 500 + 'ms';
//   });
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



//   favoriteButton--;
//   prevButton.hidden = favoriteButton < 1;
//   nextButton.hidden = false;
//   chosenFavoritesCities.forEach(li => {
//     li.style.transform += 'translateX(113px)';
//     li.style.transitionDuration = 500 + 'ms';
//   });
}



// Alegere orase favorite
let city = searchCity;
function onClickFavorites() {
  city = input.value;
  if (city.length >= 1) {
    favouritesList.innerHTML = '';
    setDataInLS(city);
    getDataFromLS();
    checkQtyLi();
  } else {
    Notify.info('Enter city, please!', {
      position: 'center-center',
    });
  }
}
