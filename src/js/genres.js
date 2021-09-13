import getRefs from './get-refs';
import genres from '../genres.json';
import genresMarkup from '../templates/genres.hbs';
import { apiService } from '../index';
import createGalleryMarkup from './create-gallery-markup';

const refs = getRefs();

export default function openGanresList(event) {
    event.preventDefault();
    //console.log(refs.genresList);
    const dropdownContent = document.querySelector('.dropdown-content');
    //console.log(dropdownContent);
    dropdownContent.classList.add('show')
    refs.genresDropdown.addEventListener('click', createGanreMarkup)
    //refs.genresList.insertAdjacentHTML("beforeend", createGanresList(genres));
}


function createGanreMarkup(event) {
   console.log(event.target.textContent);
    let genreId = event.target;
    fetchMoviesByGenfes(genreId)
}

function fetchMoviesByGenfes(id) {
    apiService.fetchMoviesByGenre(id).then(console.log);

}

// function createGanresList(genres) {
//     return genres.map(genr => genresMarkup(genr)).join('');
// }
