//FT-07 Реализовать подгрузку популярных фильмов на главную (первую) страницу

// import getFilms from './fetch-popular'
import AxiosApi from './fetch-popular'
import gallery from '../templates/film-card.hbs'
import genres from './genres.json'
import appendGalleryMarkup from './drow-marckup'



const galleryContainer = document.querySelector('.film-card__list')

/**
 * Работает с помощью класса, ниже второй запрос на инпут
 */
const axiosApiService = new AxiosApi();
// function showPopularFilm() {
//     getFilms().then(films => {
//         console.log(films)
//         const totalResult = films.results;
//         const pages = films.total_pages;
//         console.log(genres, `это данные json с жанрами`)
//         console.log(pages, `всего страниц для пагинации`)
//         console.log(totalResult[0].genre_ids, `пример массива с айпишниками, которые приходят в разделе жанры`)
//         appendGalleryMarkup(totalResult)
//  }).catch(error => console.log(error))
// }
function showPopularFilm() {
    axiosApiService.getFilms().then(films => {
       
        const totalResult = films.results;
        const pages = films.total_pages;
        console.log(genres, `это данные json с жанрами`)
        console.log(pages, `всего страниц для пагинации`)
        console.log(totalResult[0].genre_ids, `пример массива с айпишниками, которые приходят в разделе жанры`)
        appendGalleryMarkup(totalResult)
 }).catch(error => console.log(error))
}
showPopularFilm()




const input = document.querySelector('.form__input');
console.log(input)

input.addEventListener('input', onSearch)

function onSearch(evt) {
    evt.preventDefault()

     console.dir(evt.currentTarget.value)
    //  clearGallery()
    const currentValue = evt.currentTarget.value.trim();
   
 // через форму добираемся до инпута по его имени searchQuery делаем потому что  refs.input.value при модульном хранении файлов не работает
    if (currentValue === '') {
         showPopularFilm()
         return;
     }
     axiosApiService.query(evt.currentTarget.value)
    axiosApiService.searchFilms().then( films => {
         console.log(films, `FGHKJLGFUDKYTDHKGFIGDHK`)
        const totalResult = films.results;
        console.log(films.results)
        clearGallery()
        
        // if (films.length !== 0) {
        //     return
        // }
       appendGalleryMarkup(films.results)
    
    }).catch(error => console.log(error))
}

function clearGallery() {
    galleryContainer.innerHTML = '';
};



//  function appendGalleryMarkup(filmResult) {
//     console.log(`ПОпали в отрисовку`)
//     const newGallery = filmResult.map(film => {
        
//         film.release_date = Number.parseInt(film.release_date)

//         const newGenres = film.genre_ids;
//         // базовые жанры для вывода 
//         const basicGenres = newGenres.slice(0, 3);
//         // console.log(basicGenres, `базовые жанры`)
//         // необходимы будут, если необходимо открыть все жанры при клике на жанры в карточке
//         const othersGenres = newGenres.slice(3);
//         // console.log(othersGenres,  `остальные`)
//         const sumGenres = [];
// //    console.log(newGenres)
//         //    for (let i = 0; i <= newGenres.length; i++) {
     
//         //      genres.find( ganre => {
            
//         //         if (ganre.id === newGenres[i] && sumGenres.length <=2 ) {
//         //             sumGenres.push(ganre.name)
//         //         } else if (ganre.id === newGenres[i] && sumGenres.length === 3) {
//         //              sumGenres.push('Others')
//         //         }
//         //     });
            
//         //     film.genre_ids = sumGenres.join(', ');
//         // }
//         genres.map(genre => {
//             if (basicGenres.includes(genre.id)) {
//                 if (sumGenres.length <= basicGenres.length) {
                    
//                     if (sumGenres.length === 2 && newGenres.length > basicGenres.length) {
//                         sumGenres.push(genre.name)
//                         sumGenres.push('Others')
//                         return
//                     }
//                     sumGenres.push(genre.name)
//                 }
//             }
//         } )
//     film.genre_ids = sumGenres.join(', ');
 
//         return film;
//     });

//     const markup = gallery(newGallery)
//     galleryContainer.innerHTML = markup;

// }