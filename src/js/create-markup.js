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
            <span>${pressure} hPa</span>
          </li>
          <li class="data__humidity">
            <span>${humidity}%</span>
          </li>
          <li class="data__wint">
            <span>${wint} m/s</span>
          </li>
        </ul>
      </li>`;
    }
  );

  return `<ul class="more-info__list">${infoArr.join('')}</ul>`;
}
