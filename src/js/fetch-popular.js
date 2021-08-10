
import axios from "axios";
//import "regenerator-runtime";
    
const BASE_URL = "https://api.themoviedb.org/3/";
axios.defaults.baseURL = BASE_URL;
const API_KEY = "27c4b211807350ab60580c41abf1bb8c";

//значение переменной queryParams надо указывать в функции, которая будет отвечать
//в слушателе событий за нужный поиск/запрос
//let queryParams = `trending/movie/week?api_key=${API_KEY}`;

//функция запроса - асинхронный код
async function getFilms(queryParams) {
    let url = BASE_URL + queryParams;
        
    try {
        const response = await axios.get(url);
        const data = response.data;
        console.log("результат запроса:",data);
        //массив объектов - популярные фильмы
        const film = data.results;
        console.log("массив объектов:", film);
        const totalResults = data.total_results;
        console.log("всего найдено фильмов:", totalResults);
        return data;
        } catch(error) {
                throw(error)
            }
}

export default getFilms;






//ЗАПРОСЫ
//поиск по ключевому слову
//https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false&query=

//популярные фильмы за неделю
//https://api.themoviedb.org/3/trending/movie/week?api_key=<<api_key>>

//полное описание фильма
//https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US







// import axios from "axios";
// //import "regenerator-runtime";
    
// const BASE_URL = "https://api.themoviedb.org/3/";
// axios.defaults.baseURL = BASE_URL;
// const API_KEY = "27c4b211807350ab60580c41abf1bb8c";

// //значение переменной queryParams надо указывать в функции, которая будет отвечать
// //в слушателе событий за нужный поиск/запрос
// let queryParams = trending/movie/week?api_key=${API_KEY};

// //функция запроса - асинхронный код
// async function getFilms(queryParams) {
//     let url = BASE_URL + queryParams;
        
//     try {
//         const response = await axios.get(url);
//         const data = response.data;
//         console.log("результат запроса:",data);
//         //массив объектов - популярные фильмы
//         const film = data.results;
//         console.log("массив объектов:", film);
//         const totalResults = data.total_results;
//         console.log("всего найдено фильмов:", totalResults);
//         return data, film, totalResults;
//         } catch(error) {
//                 throw(error)
//             }
// }
// getFilms(queryParams);
// export default { getFilms };

//ЗАПРОСЫ
//поиск по ключевому слову
//https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false&query=

//популярные фильмы за неделю
//https://api.themoviedb.org/3/trending/movie/week?api_key=<<api_key>>

//полное описание фильма
//https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US

//ВАРИАНТЫ ИСПОЛЬЗОВАНИЯ ФУНКЦИИ ЗАПРОСА В РАЗНЫХ ЦЕЛЯХ

// function onGetPopularFilms() {
//     let queryParams = trending/all/week?api_key=${API_KEY};
//     getFilms(queryParams);
// }

// function onGetSearchFilms() {
//     let queryParams = search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false;
//     getFilms(queryParams);
// }


//СТАРЫЙ КОД

// async function getPopularFilms() {
//     const QUERY_PARAMS = trending/all/week?api_key=${API_KEY};
//     let url = BASE_URL + QUERY_PARAMS;
        
//     try {
//         const response = await axios.get(url);
//         const data = response.data;
//         console.log("результат запроса:",data);
//         //массив объектов - популярные фильмы
//         const film = data.results;
//         console.log("массив объектов: популярные фильмы", film);
//         const totalResults = data.total_results;
//         console.log("всего найдено фильмов:", totalResults);
//         return data, film, totalResults;
//         } catch(error) {
//                 throw(error)
//             }
// }
// getPopularFilms();
// export default { getPopularFilms };

// Шевчук
/**
 * КЛАССЫ Закоммичены
 */

// const options = {
//     headers: {
//         Authorization: API_KEY,

//     },
   
// };
// //функция запроса - асинхронный код
// export default class AxiosApi {

//     constructor() {
//         this.querySearch = '';
//         this.page = 1;
//         this.queryParams = `trending/movie/week?api_key=${API_KEY}`;
        
    
//     }
        
    
//     //метод отвечает за все http запросы
//     async getFilms() {
//         //  let queryParams = `trending/movie/week?api_key=${API_KEY}`;
//          let url = BASE_URL + this.queryParams;
      
       
//         try {
//              console.log(url, `URL`)
//         const response = await axios.get(url);
//         const data = response.data;
//         console.log("результат запроса:",data);
//         //массив объектов - популярные фильмы
//         const film = data.results;
//         console.log("массив объектов:", film);
//         const totalResults = data.total_results;
//         console.log("всего найдено фильмов:", totalResults);
//         return data;
//         } catch(error) {
//                 throw(error)
//             }
//     }
    
//     async searchFilms() {
//         let queryParams =  `search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${this.querySearch}`;
//          let url = BASE_URL + queryParams;
//        try {
//         const response = await axios.get(url);
//         const data = response.data;
//         return data;
//         } catch(error) {
//                 throw(error)
//             }
//       }
    
//     async searchFilmAbout() {
//         let queryParams = `movie/{movie_id}?api_key=${API_KEY}&language=en-US`;
//          let url = BASE_URL + queryParams;
//        try {
//         const response = await axios.get(url);
//         const data = response.data;
//         return data;
//         } catch(error) {
//                 throw(error)
//             }
//     }


//     incrementPage() {
//         this.page += 1;
        
//     }
//     resetPage() {
//         console.log(this.page, `reset page`)
//       return  this.page = 1;
     
//     }
//     query(newQuery) {
//         console.log(newQuery, `welcome `)
        
//         // console.log(this.queryParams)
//         this.querySearch = newQuery;
    
//         console.log(this.url)
//     }
    
  
// }