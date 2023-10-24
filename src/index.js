import '../src/js/header';
import '../src/js/footer';

import { fetchGenreList } from './js/fetchGenreList';
import { showPage } from './js/pageBuilder';
import { fetchPopularMovies } from './js/fetchMovieApi';
import { loadMoreMovies } from './js/loadMore';
import '../src/js/search';
import { handleResponse } from './js/galleryBuilder';

// Funcția de inițializare a aplicației
const startingPagination = async () => {
  try {
    showPage(1); // Afișează pagina curentă (pagina 1)
    const genreList = await fetchGenreList(); // Obtin lista de genuri (ACTIUNE, COMEDIE ETC)
    const popularMovies = await fetchPopularMovies(1); // Obtin lista de filmele populare pentru pagina curentă (pagina 1)
    handleResponse(popularMovies, true, genreList); // Manipulez răspunsul API-ului cu funcția handleResponse
  } catch (error) {
    console.error('Error', error); // Afisam erorile în caz de problema
  }
};

startingPagination(); // Apelul funcției de inițializare a aplicației

// Adăugați un eveniment de ascultare pentru clic pe butonul "Load More"
const loadMoreButton = document.querySelector('.load-more');
loadMoreButton.addEventListener('click', loadMoreMovies); // Când se face clic pe buton, se apelează funcția loadMoreMovies
