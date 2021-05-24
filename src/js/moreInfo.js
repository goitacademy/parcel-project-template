import moreInfoTpl from '../templates/moreInfo.hbs';
import ApiService from '../js/apiService.js';

// пример:
const apiService = new ApiService({});

apiService.getData('weather', 'Kiev').then(data => {
  document.querySelector('.content').innerHTML = moreInfoTpl(data);
  console.log(data);
});

apiService.getData('forecast', 'Kiev').then(data => {
  document.querySelector('.content').innerHTML = moreInfoTpl(data);
  console.log(data);
});

// apiService.getData().then(data => {
//   const arrMenu = Object.entries(data).map(item => ({
//     name: item[0],
//     link: item[1].slice(config.url.length),
//     tpl: item[0].slice(0, -1),
//   }));
//   document.querySelector('.content').innerHTML = moreInfoTpl(arrMenu);
// });
