const form = document.querySelector('.js-form');
const input = document.getElementsByName('query')[0];
const favoritesList = document.querySelector('.js-slider-list');
const addButton = document.querySelector('#js-btnAdd');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let shownFavorites = [];
getInitialShownFavorites();
setFavoritesList();

function shoulShowNavigation() {
  const favorites = JSON.parse(localStorage.getItem('cities'));

  return favorites !== null && favorites.length > 4;
}

form.addEventListener('submit', event => {
  event.preventDefault();
  const city = input.value;
  alert(`add api call here for ${city}`);
});

addButton.addEventListener('click', () => {
  const value = input.value;
  addValueToLocalStorage(value);
  if (shownFavorites.length < 4) {
    shownFavorites.push(value);
  }
  setFavoritesList();
});

prevButton.addEventListener('click', () => {
  const favorites = JSON.parse(localStorage.getItem('cities'));
  const firstShown = shownFavorites[0];
  const indexOfFirstShown = favorites.indexOf(firstShown);
  if (indexOfFirstShown > 0) {
    shownFavorites = shownFavorites.filter(
      favorite => favorite !== shownFavorites[3]
    );
    shownFavorites.unshift(favorites[indexOfFirstShown - 1]);
  }
  setFavoritesList();
});

nextButton.addEventListener('click', () => {
  const favorites = JSON.parse(localStorage.getItem('cities'));
  const lastShown = shownFavorites[shownFavorites.length - 1];
  const indexOfLastShown = favorites.indexOf(lastShown);
  if (indexOfLastShown < favorites.length - 1) {
    shownFavorites = shownFavorites.filter(
      favorite => favorite !== shownFavorites[0]
    );
    shownFavorites.push(favorites[indexOfLastShown + 1]);
  }
  setFavoritesList();
});

function setNavigationVisibility() {
  const favorites = JSON.parse(localStorage.getItem('cities'));
  if (favorites == null || favorites.length <= 4) {
    prevButton.style.visibility = 'hidden';
    nextButton.style.visibility = 'hidden';
  } else {
    prevButton.style.visibility = 'visible';
    nextButton.style.visibility = 'visible';
  }
}

function getInitialShownFavorites() {
  const favorites = JSON.parse(localStorage.getItem('cities'));

  if (favorites == null) {
    return;
  }

  if (favorites.length < 4) {
    for (let index = 0; index < favorites.length; index++) {
      shownFavorites.push(favorites[index]);
    }
  } else {
    for (let index = 0; index < 4; index++) {
      shownFavorites.push(favorites[index]);
    }
  }
}

function setFavoritesList() {
  favoritesList.innerHTML = '';
  for (let index = 0; index < shownFavorites.length; index++) {
    const favorite = shownFavorites[index];

    const li = document.createElement('li');
    li.style = 'display:flex;';

    const city = document.createElement('button');
    city.value = favorite;
    city.innerHTML = favorite;
    city.addEventListener('click', handleSelectFavorite);
    const button = document.createElement('button');
    button.value = favorite;
    button.addEventListener('click', handleDeleteEvent);

    button.innerHTML = 'x';
    li.appendChild(city);
    li.appendChild(button);
    favoritesList.appendChild(li);
  }

  setNavigationVisibility();
}

function handleSelectFavorite(event) {
  const value = event.target.value;
  //todo: add api call here
  //alert(`Add api call here for ${value}`);
}

function handleDeleteEvent(event) {
  const value = event.target.value;
  let cities = JSON.parse(localStorage.getItem('cities'));
  deleteValueFromShownFavorites(cities, value);
  deleteValueFromLocalStorage(cities, value);
  setFavoritesList();
}

function deleteValueFromLocalStorage(cities, value) {
  cities = cities.filter(city => city !== value);
  localStorage.setItem('cities', JSON.stringify(cities));
}

function deleteValueFromShownFavorites(favorites, value) {
  if (favorites.length <= 4) {
    shownFavorites = shownFavorites.filter(f => f !== value);
    return;
  }

  const lastShown = shownFavorites[shownFavorites.length - 1];
  const indexOfLastShown = favorites.indexOf(lastShown);
  if (indexOfLastShown < favorites.length - 1) {
    shownFavorites = shownFavorites.filter(f => f !== value);
    shownFavorites.push(favorites[indexOfLastShown + 1]);
  } else {
    shownFavorites = shownFavorites.filter(f => f !== value);
  }
}

function addValueToLocalStorage(value) {
  if (value === '') {
    return;
  }
  const cities = localStorage.getItem('cities');

  if (cities === null) {
    localStorage.setItem('cities', JSON.stringify([value]));
  } else {
    let citiesArray = JSON.parse(cities).map(city => city.toLowerCase());
    if (!citiesArray.includes(value.toLowerCase())) {
      citiesArray.push(value);
      localStorage.setItem('cities', JSON.stringify(citiesArray));
    }
  }
}
