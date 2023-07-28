(() => {
  const URL = 'https://pixabay.com/api/';
  const KEY = '&key=38046505-5b9e748b87046ce765cd21b85';
  const requestParameters = `?image_type=photo&category=travel&orientation=horizontal&q=kiev&page=1&per_page=40`;
  const bg = document.querySelector('.backgroundImage');

  fetch(URL + requestParameters + KEY, {
    method: 'GET',
  })
    .then(res => res.json())
    .then(image => {
      console.log(image);
      const randomImg = Math.floor(Math.random() * image.hits.length);
      const img = image.hits[randomImg].largeImageURL;      
      bg.style.backgroundImage = `url(${img})`;
    });
})();
