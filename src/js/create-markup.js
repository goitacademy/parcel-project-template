export function createMarkup(markup) {
  const infoArr = markup.map(
    ({ time, weatherIconName, temperature, pressure, humidity, wint }) => {
      const weatherIconUrl = `http://openweathermap.org/img/wn/${weatherIconName}.png`;
      return `
      <li class="more-info__item">
        <h3 class="more-info__title">${time}</h3>
        <p class="more-info__temp">
          <img src="${weatherIconUrl}" alt="Weather icon" class="more-info__icon">
          <span>${temperature}°C</span>
        </p>
        <ul class="more-info__data">
          <li class="data__pressure">
            <svg class="more-info__icon" width="20" height="20">
              <use href="./images/sprite.svg#icon-barometer"></use>
            </svg>
            <span>${pressure} hPa</span>
          </li>
          <li class="data__humidity">
            <svg class="more-info__icon" width="20" height="20">
              <use href="./images/sprite.svg#icon-humidity"></use>
            </svg>
            <span>${humidity}%</span>
          </li>
          <li class="data__wint">
            <svg class="more-info__icon" width="20" height="20">
              <use href="./images/sprite.svg#icon-wind"></use>
            </svg>
            <span>${wint} m/s</span>
          </li>
        </ul>
      </li>`;
    }
  );

  return `<ul class="more-info__list">${infoArr.join('')}</ul>`;
}
