export function fetchCityImage(cityName) {
  const URL = 'https://pixabay.com/api/';
  const KEY = 'key=40060920-6840b24aaee2d2997514145f9';
  const requestParameters = `?image_type=photo&category=travel&orientation=horizontal&q=${encodeURIComponent(
    cityName
  )}&page=1&per_page=40`;

  return fetch(URL + requestParameters + '&' + KEY)
    .then(res => {
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      return res.json();
    })
    .then(image => {
      if (image.hits && image.hits.length) {
        const randomImg = Math.floor(Math.random() * image.hits.length);
        return image.hits[randomImg].largeImageURL;
      } else {
        throw new Error('No images found.');
      }
    });
}
