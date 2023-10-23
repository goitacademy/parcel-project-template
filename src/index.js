import Filmotekapi from './FilmotekaApi';
import { createMarkup } from './markupCards';
import { updateMovies } from './markupCards';

const filmotekaApi = new Filmotekapi();
let markups = [];

const fetchMovies = async () => {
  const data = await filmotekaApi.getMovies();

  markups = markups.concat(data.map(element => createMarkup(element)));
  updateMovies(markups);
};

fetchMovies();
