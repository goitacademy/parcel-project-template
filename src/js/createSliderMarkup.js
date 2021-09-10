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
  const id10 = document.getElementById('10');
  const id11 = document.getElementById('11');
  const id12 = document.getElementById('12');
  const id13 = document.getElementById('13');
  const id14 = document.getElementById('14');
  const id15 = document.getElementById('15');
  const id16 = document.getElementById('16');
  const id17 = document.getElementById('17');
  const id18 = document.getElementById('18');
  const id19 = document.getElementById('19');

  id0.setAttribute('src', `${url}${cardList[0]}`);
  id1.setAttribute('src', `${url}${cardList[1]}`);
  id2.setAttribute('src', `${url}${cardList[2]}`);
  id3.setAttribute('src', `${url}${cardList[3]}`);
  id4.setAttribute('src', `${url}${cardList[4]}`);
  id5.setAttribute('src', `${url}${cardList[5]}`);
  id6.setAttribute('src', `${url}${cardList[6]}`);
  id7.setAttribute('src', `${url}${cardList[7]}`);
  id8.setAttribute('src', `${url}${cardList[8]}`);
  id9.setAttribute('src', `${url}${cardList[9]}`);
  id10.setAttribute('src', `${url}${cardList[10]}`);
  id11.setAttribute('src', `${url}${cardList[11]}`);
  id12.setAttribute('src', `${url}${cardList[12]}`);
  id13.setAttribute('src', `${url}${cardList[13]}`);
  id14.setAttribute('src', `${url}${cardList[14]}`);
  id15.setAttribute('src', `${url}${cardList[15]}`);
  id16.setAttribute('src', `${url}${cardList[16]}`);
  id17.setAttribute('src', `${url}${cardList[17]}`);
  id18.setAttribute('src', `${url}${cardList[18]}`);
}
