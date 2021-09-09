import sliderTpl from '../templates/sliderTpl';

import getRefs from './get-refs';
const refs = getRefs();

export default function createSliderMarkup(data) {
  let cardList = [];

  cardList = data.map(card => {
    return {
      backdrop_path: card.backdrop_path,
      poster_path: card.poster_path,
      id: card.id,
    };
  });
  refs.sliderList.innerHTML = sliderTpl(cardList);
}
