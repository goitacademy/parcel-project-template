import movieCardTpl from "../templates/movie-card.hbs";
import allMoviesCardTpl from "../templates/all-movies-card.hbs";
const cardContainer = document.querySelector('.js-card-container');
const inputRef = document.querySelector('.js-search-form');
var debounce = require('lodash.debounce');
console.log(inputRef);
const API_KEY = '012d55b548e18985b02a233c2db23101';
const BASE_URL = 'https://api.themoviedb.org/';

async function fetchMoviesByKeyWord(searchQuerry){
    try {
        const response = await fetch(`${BASE_URL}3/search/movie?api_key=${API_KEY}&query=${searchQuerry}`);
        // console.log(response.json())
        const data = await response.json();
        console.log(data.results)
        return data.results;
    } catch(error) {
        return error;
    }
};

// На промисах
// export default function fetchMoviesByKeyWord(searchQuerry) {
//     return fetch(`https://api.themoviedb.org/3/search/movie?api_key=012d55b548e18985b02a233c2db23101&query=${searchQuerry}`)
//         .then(response => response.json())
//         //     // response.json();
//         //     console.log(response.json())
//         // })
//         .then(({ results }) => {
            // incrementPage()
//             return results;
//         })
// };

inputRef.addEventListener('input', debounce(onInputChange, 500));
// inputRef.addEventListener('input', onInputChange);

function onInputChange(e) {
    let searchQuerry = e.target.value;
    console.log(e.target.value);
    console.log(searchQuerry);
    if (searchQuerry !== '') {
        fetchMoviesByKeyWord(searchQuerry)
            .then(renderMoviesCard);
    } else {
        clearMarkup();
    };
};

function renderMoviesCard(movies) {
    const movieMarkup = movieCardTpl(...movies);
    const allMoviesMarkup = allMoviesCardTpl(movies);
    if (movies.length === 1) {
        console.log(movies.length);
        cardContainer.innerHTML = movieMarkup;
    } else {
        console.log(movies.length);
        cardContainer.innerHTML = allMoviesMarkup;
    }
};

function clearMarkup() {
    cardContainer.innerHTML = '';
}
