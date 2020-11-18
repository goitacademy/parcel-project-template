import movieCardTpl from "../templates/movie-card.hbs";
import allMoviesCardTpl from "../templates/all-movies-card.hbs";
const cardContainer = document.querySelector('.js-card-container');
const inputRef = document.querySelector('.js-search-form');
var debounce = require('lodash.debounce');
console.log(inputRef);

// export default async function fetchMoviesByKeyWord(keyWord){
//     try {
//         const response = await fetch('https://api.themoviedb.org/3/search/movie?api_key=012d55b548e18985b02a233c2db23101&query=${keyWord}');
//         console.log(response.json())
//         return await response.json()
//     } catch(error) {
//         return error;
//     }
// };

export default function fetchMoviesByKeyWord(searchQuerry) {
    return fetch(`https://api.themoviedb.org/3/search/movie?api_key=012d55b548e18985b02a233c2db23101&query=${searchQuerry}`)
        .then(response => response.json())
        //     // response.json();
        //     console.log(response.json())
        // })
        .then(data => {
            // console.log(data.results);
            return data.results;
        })
};

function fetchGenre(searchQuerry) {
    return fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=012d55b548e18985b02a233c2db23101&language=en-US&query=${searchQuerry}`)
        .then(response => response.json())
        .then(data => {
            // console.log(data.genres);
            return data.genres;
        })
};

// function compareGenre(genre) {
//     if
// };


// console.log(fetchMoviesByKeyWord());

inputRef.addEventListener('input', debounce(onInputChange, 500));
// inputRef.addEventListener('input', onInputChange);

function onInputChange(e) {
    let searchQuerry = e.target.value;
    console.log(e.target.value);
    console.log(searchQuerry);
    if (searchQuerry !== '') {
        fetchMoviesByKeyWord(searchQuerry)
            .then(renderMoviesCard);
        fetchGenre(searchQuerry)
            // .then(compareGenre);
    } else {
        clearMarkup();
    };
};

function renderMoviesCard(movies) {
    console.log(movies);
    console.log(movies.genre_ids);
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