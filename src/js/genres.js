import getRefs from './get-refs';
import genres from '../genres.json';
//import genresMarkup from '../templates/genres.hbs';
import { apiService } from '../index';
import createGalleryMarkup from './create-gallery-markup';

const refs = getRefs();
const genresList = ["Comedy","Drama", "History","Family","Horror" ]


export default function openGanresList(event) {
    event.preventDefault();
    console.log(refs.genresList);
    refs.genresList.classList.add('site-nav__link--current-page');
    const dropdownContent = document.querySelector('.dropdown-content');
    dropdownContent.classList.toggle('show')
    refs.genresDropdown.addEventListener('click', createGanreMarkup);
}


function createGanreMarkup(event) {    
    console.log(event.target);
    let genreName = event.target.textContent;
    console.log(genres);
    getGanreId(genreName);
}

function getGanreId(genreName) {
    genres.map(ganre => {
        if(genreName ===  ganre.name){
            console.log(ganre.id)
            fetchMoviesByGenfes(ganre.id)
        }
    })
    }

function fetchMoviesByGenfes(id) {
    apiService.fetchMoviesByGenre(id).then(createGalleryMarkup).catch(console.log);
}



