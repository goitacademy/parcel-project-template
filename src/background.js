export function fetchCityImage(cityName) {
  const unsplashApiKey = '3eLdLI3McT-xMd_k4uMgU6VIED8TAquFAmIAMFjfgHU';
  const unsplashUrl = `https://api.unsplash.com/search/photos?query=${cityName}&client_id=${unsplashApiKey}&per_page=1`;

  return fetch(unsplashUrl)
    .then(response => response.json())
    .then(data => {
      if (data && data.results && data.results.length > 0) {
        return data.results[0].urls.full;
      }
      throw new Error('No image found for the given city.');
    });
}
