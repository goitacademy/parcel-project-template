import '../src/js/header';
import '../src/js/footer';

import { handleResponse } from './js/galleryBuilder';
import { showPage } from './js/pageBuilder';

const currentPage = 1;

// Funcția de inițializare a aplicației

const startingPagination = async () => {
  try {
    showPage(currentPage); // Afișează pagina curentă
    handleResponse(popularMovies, true, genreList); // Manipulează răspunsul API-ului cu funcția handleResponse
  } catch (error) {
    console.error('Error', error);
  }
};
// Apelul funcției de inițializare a aplicației
startingPagination();
