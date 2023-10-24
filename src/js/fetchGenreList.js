import axios from 'axios';

const API_KEY = '24996ba1a77f5ecd2a2a683701ea072b';
const URL = 'https://api.themoviedb.org/3';

// Funcție care obține lista de detalii (nume, an)
const fetchGenreList = async () => {
  try {
    const response = await axios.get(
      `${URL}/genre/movie/list?api_key=${API_KEY}`
    );
    const genres = response.data.genres;
    return genres;
  } catch (error) {
    console.log('Error: ', error);
    return [];
  }
};
// Funcție care obține genul filmului (actiune, thriller)
const getGenres = (genreIds, genres) => {
  const arr = [];

  for (const id of genreIds) {
    const genre = genres.find(genre => genre.id === id); // Caută genul corespunzător în lista de genuri
    if (genre) {
      arr.push(genre.name); // Adaugă numele genului la lista de genuri
    }
  }

  if (arr.length === 0) {
    arr.push('Other'); // Dacă nu există genuri, se adaugă "Other" la listă
  } else if (arr.length > 2) {
    arr.splice(2); // Dacă lista conține mai mult de 3 genuri, elimină genurile de la indexul 3 înainte
    arr.push('Other'); // Adaugă "Other" la final
  }
  return arr;
};

export { fetchGenreList, getGenres };
