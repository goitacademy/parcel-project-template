import renderCards from '../templates/gallery.hbs';
import genres from '../genres.json';

export default function createGalleryMarkup(data) {
  let cardList = [];
  cardList = data.map(card => {
    const genreList = [];
    card.genre_ids.forEach(id => {
      const genre = genres.find(genre => genre.id === id);
      if (genre && genreList.length <= 3) {
        if (genreList.length < 3) genreList.push(genre.name);
        else genreList[2] = 'others...';
      }
    });
    return {
      backdrop_path: card.backdrop_path,
      poster_path: card.poster_path,
      original_title: card.original_title,
      genres: genreList.join(', '),
      id: card.id,
    };
  });
  document.querySelector('.movies__colection').innerHTML = renderCards(cardList);
}
