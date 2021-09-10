import getRefs from './get-refs';
const refs = getRefs();

export default async function createSliderMarkup(data) {
  let cardList = [];

  cardList = data.map(card => {
    return card.poster_path;
  });
  const url = 'https://image.tmdb.org/t/p/w300/';

  const arrowleft = document.querySelector('.slick-prev');
  const arrowright = document.querySelector('.slick-next');
  arrowleft.textContent = '‹';
  arrowright.textContent = '›';

  const id0 = document.getElementById('0');
  const id1 = document.getElementById('1');
  const id2 = document.getElementById('2');
  const id3 = document.getElementById('3');
  const id4 = document.getElementById('4');
  const id5 = document.getElementById('5');
  const id6 = document.getElementById('6');
  const id7 = document.getElementById('7');
  const id8 = document.getElementById('8');
  const id9 = document.getElementById('9');

  id0.setAttribute('src', `${url}${cardList[getRandomInt(0, 1)]}`);
  id1.setAttribute('src', `${url}${cardList[getRandomInt(2, 3)]}`);
  id2.setAttribute('src', `${url}${cardList[getRandomInt(4, 5)]}`);
  id3.setAttribute('src', `${url}${cardList[getRandomInt(6, 7)]}`);
  id4.setAttribute('src', `${url}${cardList[getRandomInt(8, 9)]}`);
  id5.setAttribute('src', `${url}${cardList[getRandomInt(10, 11)]}`);
  id6.setAttribute('src', `${url}${cardList[getRandomInt(12, 13)]}`);
  id7.setAttribute('src', `${url}${cardList[getRandomInt(14, 15)]}`);
  id8.setAttribute('src', `${url}${cardList[getRandomInt(16, 17)]}`);
  id9.setAttribute('src', `${url}${cardList[getRandomInt(18, 19)]}`);
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
