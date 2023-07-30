import { getCityImage } from './pixabay-api';

export async function updateCityImage(city) {
  const imageUrl = await getCityImage(city);
  const containerBackground = document.querySelector('.container__background');

  containerBackground.style.backgroundImage = `url(${imageUrl})`;
}
