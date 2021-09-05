//import ApiService from './api-service'
import { apiService } from '../index';
import createGalleryMarkup from './create-gallery-markup';
import showAllert from './show-allert';


const refs = {
    searchForm: document.querySelector('.search-form'),
    body: document.querySelector('body'),
}
let inputQuery = '';

console.log(refs.body)

refs.searchForm.addEventListener('click', getinputQuery);
window.addEventListener('keydown', clearInputEsc);
//window.addEventListener('keydown', openEnter)
//refs.body.addEventListener('click', clearInput);


function getinputQuery (event){
    event.preventDefault();

    if (event.target !== document.querySelector('.search-icon')){
    return;
    }
    
    
    inputQuery = event.currentTarget.elements.input.value;
    console.log(event.currentTarget);
    console.log(event.target);
    //console.log(inputQuery)
    findMovies(inputQuery);
}

function findMovies(query) { 
    apiService.findMovies(query).then(createGalleryMarkup).catch(showAllert);
}

function clearInputEsc(event) {
    event.preventDefault;
    const ESC_KEY_CODE = 'Escape';
    if (event.code === ESC_KEY_CODE) {
        console.log(inputQuery);
        event.preventDefault;
        inputQuery = '';
        document.querySelector('.search-input').value = "";
    }
  }





