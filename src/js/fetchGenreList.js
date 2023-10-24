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

  if (!genreIds || !genres) {
    arr.push('Unknown'); // Adăugați o valoare implicită în caz de lipsă de date
  } else {
    for (const id of genreIds) {
      const genre = genres.find(genre => genre.id === id);
      if (genre) {
        arr.push(genre.name);
      }
    }

    if (arr.length === 0) {
      arr.push('Other');
    } else if (arr.length > 2) {
      arr.splice(2);
      arr.push('Other');
    }
  }

  return arr;
};

export { fetchGenreList, getGenres };
