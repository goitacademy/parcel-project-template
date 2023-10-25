export function createMarkup({ title, releaseDate, genres, poster }) {
  return `
  <li class="gallery__items">
  <div class="gallery__items__img">
     <img src="https://image.tmdb.org/t/p/w500${poster}" alt="${title}" loading="lazy" /> 
  </div>
  <div class="gallery__items__details">
    <p class="gallery__items__details--title">
      ${title}
    </p>
    
     <p class="gallery__items__details--genres">
   ${genres}
    </p>

    <p class="gallery__items__details--year">
      ${releaseDate}
    </p>
  </div>
</li>
  `;
}

export function updateMovies(markup) {
  document.getElementById('gallery').innerHTML = markup;
}
