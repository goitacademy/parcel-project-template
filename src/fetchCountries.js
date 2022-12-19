// const BASE_URL = 'https://restcountries.com/v3.1/name'

// export class RestCountriesService {
//     fetchCountries(name) {
//         const url = `${BASE_URL}/${name}?fields=name,capital,population,flags,languages`;

//         return fetch(url)
//             .then(response => {
//                 if (response.status === 404) {
//                     return [];
//                 }
//                 return response.json();
//             })
//             .catch(error => {
//             throw new Error(response.status)
//         })
//         }
// };

// const BASE_URL = 'https://restcountries.com/v3.1/name';

// export function fetchCountries(name) {
//   const url = `${BASE_URL}/${name}?fields=name,capital,population,flags,languages`;

//   return fetch(url).then(response => {
//     if (response.status === 404) {
//       console.error(response.status);
//       return [];
//     }
//     return response.json();
//   });
// };

const BASE_URL = 'https://restcountries.com/v3.1/name';

export function fetchCountries(name) {
  const url = `${BASE_URL}/${name}?fields=name,capital,population,flags,languages`;

  return fetch(url).then(response => {
    if (response.status === 404) {
      throw 'Oops, there is no country with that name';
    }
    return response.json();
  });
}
