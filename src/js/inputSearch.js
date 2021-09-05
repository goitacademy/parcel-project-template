//import ApiService from './api-service'
import { apiService } from '../index';
import createGalleryMarkup from './create-gallery-markup';
import showAllert from './show-allert';


const refs = {
    searchForm: document.querySelector('.search-form'),
}

refs.searchForm.addEventListener('click', getinputQuery);



function getinputQuery (event){
    event.preventDefault();

    if (event.target !== document.querySelector('.search-button')){
    return;
    }
    
    let inputQuery = '';
    inputQuery = event.currentTarget.elements.input.value;
    //console.log(inputQuery)
    findMovies(inputQuery);
}

function findMovies(query) { 
    apiService.findMovies(query).then(createGalleryMarkup).catch(showAllert);
}

