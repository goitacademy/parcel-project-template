import renderCards from '../templates/gallery.hbs';
import genres from '../genres.json';
import getRefs from './get-refs';
const refs = getRefs();

export default function createGalleryMarkup(data) {
  let cardList = [];

  cardList = data.map(card => {
    const genreList = [];
    card.genre_ids.forEach(id => {
      const genre = genres.find(genre => genre.id === id);
      if (genre && genreList.length <= 2) {
        if (genreList.length < 2) genreList.push(genre.name);
        else genreList[2] = 'others...';
      }
    });
    return {
      backdrop_path: card.backdrop_path,
      poster_path: card.poster_path,
      original_title: card.original_title,
      release_date: card.release_date?.substring(0, 4),
      vote_average: card.vote_average,
      genres: genreList.join(', '),
      id: card.id,
    };
  });
  refs.movies.innerHTML = renderCards(cardList);
}
