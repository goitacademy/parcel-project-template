import { fetchCityImage } from './background.js';

document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.search-bar');
  const searchBarInput = document.querySelector('.search-bar_input');
  const starIcon = document.querySelector('.search-bar_favorites-icon');
  const favoritesList = document.querySelector('.favorites_list');
  const favoritesLeftIcon = document.querySelector('.favorites_prev-btn');
  const favoritesRightIcon = document.querySelector('.favorites_next-btn');

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    const cityName = searchBarInput.value.trim();
    if (cityName) {
      fetchWeather(cityName);
    }
  });

  starIcon.addEventListener('click', function () {
    const cityName = searchBarInput.value.trim();
    this.classList.toggle('selected');
    if (cityName && !isCityInFavorites(cityName)) {
      addToFavorites(cityName);
    }
  });

  const SCROLL_AMOUNT = 100;
  favoritesLeftIcon.addEventListener('click', function () {
    favoritesList.scrollBy({
      left: -SCROLL_AMOUNT,
      top: 0,
      behavior: 'smooth',
    });
  });

  favoritesRightIcon.addEventListener('click', function () {
    favoritesList.scrollBy({
      left: SCROLL_AMOUNT,
      top: 0,
      behavior: 'smooth',
    });
  });

  function fetchWeather(cityName) {
    const apiKey = '07aed853a2b3116bf7e19dfeee63b968';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.cod === 200) {
          fetchCityImage(cityName)
            .then(imageUrl => {
              document.body.style.backgroundImage = `url(${imageUrl})`;
              document.body.style.backgroundSize = 'cover';
              document.body.style.backgroundPosition = 'center';
              document.body.style.backgroundRepeat = 'no-repeat';
            })
            .catch(error => {
              console.error('Error fetching city image:', error);
            });
        } else {
          alert(data.message);
        }
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
      });
  }

  function isCityInFavorites(cityName) {
    const items = favoritesList.querySelectorAll('.favorites_item');
    for (let item of items) {
      if (item.textContent.trim().toLowerCase() === cityName.toLowerCase()) {
        return true;
      }
    }
    return false;
  }

  function addToFavorites(cityName) {
    const listItem = document.createElement('li');
    listItem.classList.add('favorites_item');
    listItem.textContent = cityName;

    const closeButton = document.createElement('span');
    closeButton.classList.add('close-button');
    closeButton.textContent = 'x';
    closeButton.addEventListener('click', function () {
      listItem.remove();
    });

    listItem.appendChild(closeButton);
    favoritesList.appendChild(listItem);
  }
});
