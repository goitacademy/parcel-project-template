import getRefs from './get-refs';
const refs = getRefs();

export default async function createSliderMarkup(data) {
  let cardList = [];
  console.log(data);
  cardList = data.map(card => {
    return {
      backdrop_path: card.backdrop_path,
      poster_path: card.poster_path,
      id: card.id,
    };
  });

  // refs.sliderImg.setAttribute('src', `https://image.tmdb.org/t/p/w300/${cardList.poster_path}`);
}
