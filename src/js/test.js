import testTpl from '../templates/test.hbs';
import apiService from '../js/apiService.js';

// пример:

apiService.getData('weather', 'Kiev').then(data => {
  document.querySelector('.content').insertAdjacentHTML('beforebegin', testTpl(data));
  // document.querySelector('.content').innerHTML = moreInfoTpl(data);
  console.log(data);
});

apiService.getData('forecast', 'Kiev').then(data => {
  document.querySelector('.content').insertAdjacentHTML('beforebegin', testTpl(data));
  // document.querySelector('.content').innerHTML = moreInfoTpl(data);
  console.log(data);
});
// console.log(apiService);
// apiService
//   .getIcon()
//   .then(data => {
//     console.log(data);
//     const urlIcon = `http://openweathermap.org/img/wn/10d@2x.png`;
//     document.querySelector('.content').innerHTML = testTpl(urlIcon);
//     console.log(data);
//   })
//   .catch(err => console.log(err));

const urlIcon = `http://openweathermap.org/img/wn/10d@2x.png`;
document.querySelector('.content').innerHTML = testTpl(urlIcon);
// apiService.getData().then(data => {
//   const arrMenu = Object.entries(data).map(item => ({
//     name: item[0],
//     link: item[1].slice(config.url.length),
//     tpl: item[0].slice(0, -1),
//   }));
//   document.querySelector('.content').innerHTML = moreInfoTpl(arrMenu);
// });
