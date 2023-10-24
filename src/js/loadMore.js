import { showPage } from './pageBuilder';

// Selectez butonul "Load More"
const loadMoreButton = document.querySelector('.load-more');

// Inițializați numărul paginii curente
let currentPage = 1;

// Definim funcția loadMoreMovies pentru a încărca mai multe filme atunci când se apasă pe buton
const loadMoreMovies = async () => {
  currentPage++; // Incrementez numărul paginii pentru a solicita următoarea pagină de filme

  try {
    // Afisez următoarea pagină folosind funcția showPage
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Acesta va face o mișcare lină către partea de sus a paginii
    await showPage(currentPage, false); // `false` indică că nu este o căutare, ci solicitarea pentru filme populare
    // Actualizați textul din div cu numărul paginii curente
    const currentPageDiv = document.getElementById('currentPage');
    currentPageDiv.innerText = `Page ${currentPage}`;
  } catch (error) {
    console.error('Error loading more movies:', error);
  }
};

// Adăugați un eveniment de ascultare pentru clic pe butonul "Load More"
loadMoreButton.addEventListener('click', loadMoreMovies);

// Exportați funcția loadMoreMovies pentru a o face disponibilă pentru import
export { loadMoreMovies };
