//FT-07 Реализовать подгрузку популярных фильмов на главную (первую) страницу
import axios from "axios";
import getPopularFilms from './fetch-popular'
import gallery from '../templates/film-card.hbs'
import genres from './genres.json'

const URL = 'https://image.tmdb.org/t/p/w500';
const galleryContainer = document.querySelector('.film-card__list')


function showPopularFilm() {
    getPopularFilms().then( films  => {
        const totalResult = films.results;
        const pages = films.total_pages;
        console.log(pages, `всего страниц для пагинации`)
        appendGalleryMarkup(totalResult)
 }).catch(error => console.log(error))
}
showPopularFilm()


function appendGalleryMarkup(filmResult) {
    console.log(Number.parseInt(filmResult[0].release_date))
    const newGallery = filmResult.map(film => {
        
        film.release_date = Number.parseInt(film.release_date)

        film.poster_path = URL + film.backdrop_path;
        const newGenres = film.genre_ids;
        const sumGenres = [];
        for (let i = 0; i < genres.length; i++) {
            
            for (let el in newGenres) {
                
                if (newGenres[el] === genres[i].id) {   
                    sumGenres.push(genres[i].name) 
                }
            }
          
            film.genre_ids = sumGenres.toString();
        }
       
       
        return film;
    });

    const markup = gallery(newGallery)

    galleryContainer.insertAdjacentHTML('beforeend', markup)

}
