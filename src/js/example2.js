import genres from './genres.json';

const axios = require('axios').default;
const galleryUrl = document.querySelector('.gallery');

async function fetchPhotos() {
    try {
        const response = await axios.get('https://api.themoviedb.org/3/trending/movie/week?api_key=eb0d0367818cd79735feb2881fbbeeec');
        const photos = response.data.results;
        console.log(response.data.results);
        renderImgCard(photos);
    } catch (error) {
        console.error(error);
    }
}
fetchPhotos();

async function renderImgCard(photos) {

    const markupList = photos.map((photo) => {
        const movieDateRelease = photo.release_date.split('').slice(0, 4).join("");
        let genreText = [];
        genres.map((genre) => {
            if (photo.genre_ids.includes(genre.id)) {
                genreText.push(genre.name)
            }
        })

        genreText.splice(2, genreText.length - 2, 'Other')
        return `<div class="photo-card">
  <img src='https://image.tmdb.org/t/p/original${photo.poster_path}' alt="${photo.original_title}" loading="lazy" width='300px' heigth='250px' />
  <div class="info">
    <p class="info-item">
      <b>  ${photo.original_title}</b>
    </p>
    <p class="info-item">
      <b>  ${genreText}</b>
    </p>
    <p class="info-item">
      <b>  ${movieDateRelease}</b>
    </p>
    
  </div>
</div> `
    }
    ).join("");
    galleryUrl.insertAdjacentHTML('beforeend', markupList);
}