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
