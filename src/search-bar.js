document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.search-bar');
  const searchBarInput = document.querySelector('.search-bar_input');
  const starIcon = document.querySelector('.search-bar_favorites-icon');
  const favoritesList = document.querySelector('.favorites_list');
  let currentSlidePosition = 0;
  const maxSlide = window.innerWidth <= 767 ? 150 : 350;

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    const cityName = searchBarInput.value.trim();
    if (cityName) {
      fetchWeather(cityName);
    }
  });

  starIcon.addEventListener('click', function () {
    const cityName = searchBarInput.value.trim();
    if (cityName && !isCityInFavorites(cityName)) {
      addToFavorites(cityName);
    }
  });

  document
    .querySelector('.favorites_prev-btn')
    .addEventListener('click', () => slideFavorites('prev'));
  document
    .querySelector('.favorites_next-btn')
    .addEventListener('click', () => slideFavorites('next'));

  function fetchWeather(cityName) {
    const apiKey = '07aed853a2b3116bf7e19dfeee63b968';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.cod === 200) {
          console.log(data);
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
    favoritesList.appendChild(listItem);
  }

  function slideFavorites(direction) {
    let totalWidth = 0;
    favoritesList.querySelectorAll('.favorites_item').forEach(item => {
      totalWidth +=
        item.offsetWidth + parseInt(window.getComputedStyle(item).marginRight);
    });

    if (direction === 'next' && currentSlidePosition - maxSlide > -totalWidth) {
      currentSlidePosition -= maxSlide;
    } else if (direction === 'prev' && currentSlidePosition < 0) {
      currentSlidePosition += maxSlide;
    }
    favoritesList.style.transform = `translateX(${currentSlidePosition}px)`;
  }
});
