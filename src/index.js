import './sass/main.scss';

import ApiService from './js/api-service.js';
import showAllert from './js/show-allert.js';
import genres from './genres.json'; //массив жанров (объектов вида: { "id": 28, "name": "Action" })

const API_KEY = 'ccfb7060bf1ddcafc35d65cbfee37150';

//Создаём экземпляр класса, передаём ему в конструкторе свой api-key
const apiService = new ApiService(API_KEY);

//Получаем список популярных фильмов для первой страницы:
apiService.getTrendingMovies().then(console.log);
// вместо console.log ставим ф-цию рендера карточек
// она получит параметром массив объектов вида:

// {
//     "genre_ids": [
//         28,
//         12,
//         14,
//         35
//     ],
//     "original_language": "en",
//     "id": 436969,
//     "poster_path": "/iXbWpCkIauBMStSTUT9v4GXvdgH.jpg",
//     "video": false,
//     "vote_average": 8,
//     "overview": "Supervillains Harley Quinn, Bloodsport, Peacemaker and a collection of nutty cons at Belle Reve prison join the super-secret, super-shady Task Force X as they are dropped off at the remote, enemy-infused island of Corto Maltese.",
//     "release_date": "2021-07-28",
//     "vote_count": 3277,
//     "title": "The Suicide Squad",
//     "adult": false,
//     "backdrop_path": "/jlGmlFOcfo8n5tURmhC7YVd4Iyy.jpg",
//     "original_title": "The Suicide Squad",
//     "popularity": 2994.676,
//     "media_type": "movie"
// }

////////////**********************************************************************/////// */

//Ищем фильмы по ключевому слову:
const query = ' sun';
apiService.findMovies(query).then(console.log).catch(showAllert);
// аналогично вместо console.log ставим ф-цию рендера карточек
// она получит параметром массив объектов вида:

// {
//     "adult": false,
//     "backdrop_path": "/90ncBig0baagi298dA9ZdvKzUmJ.jpg",
//     "genre_ids": [
//         28,
//         18,
//         10752
//     ],
//     "id": 9567,
//     "original_language": "en",
//     "original_title": "Tears of the Sun",
//     "overview": "Navy SEAL Lieutenant A.K. Waters and his elite squadron of tactical specialists are forced to choose between their duty and their humanity, between following orders by ignoring the conflict that surrounds them, or finding the courage to follow their conscience and protect a group of innocent refugees. When the democratic government of Nigeria collapses and the country is taken over by a ruthless military dictator, Waters, a fiercely loyal and hardened veteran is dispatched on a routine mission to retrieve a Doctors Without Borders physician.",
//     "popularity": 26.269,
//     "poster_path": "/fUnSSQukwTwBSdCbufEE36petLq.jpg",
//     "release_date": "2003-03-07",
//     "title": "Tears of the Sun",
//     "video": false,
//     "vote_average": 6.7,
//     "vote_count": 1607
// }

////////////**********************************************************************/////// */

//Детальная информация по фильму по его ID:
const id = '10110';
apiService.getMovieByID(id).then(console.log);
// аналогично вместо console.log ставим ф-цию рендера карточки этого фильма
// она получит параметром объект вида:

// {
//     "adult": false,
//     "backdrop_path": "/l1HWd2rQ0XDNP9FUT4ZQJIQdEgp.jpg",
//     "belongs_to_collection": null,
//     "budget": 35000000,
//     "genres": [
//         {
//             "id": 18,
//             "name": "Drama"
//         },
//         {
//             "id": 36,
//             "name": "History"
//         },
//         {
//             "id": 10752,
//             "name": "War"
//         }
//     ],
//     "homepage": "",
//     "id": 10110,
//     "imdb_id": "tt0092965",
//     "original_language": "en",
//     "original_title": "Empire of the Sun",
//     "overview": "Jamie Graham, a privileged English boy, is living in Shanghai when the Japanese invade and force all foreigners into prison camps. Jamie is captured with an American sailor, who looks out for him while they are in the camp together. Even though he is separated from his parents and in a hostile environment, Jamie maintains his dignity and youthful spirits, providing a beacon of hope for the others held captive with him.",
//     "popularity": 14.3,
//     "poster_path": "/gEaCzjwHoPgyQFcwHql7o5YLHAU.jpg",
//     "production_companies": [
//         {
//             "id": 56,
//             "logo_path": "/cEaxANEisCqeEoRvODv2dO1I0iI.png",
//             "name": "Amblin Entertainment",
//             "origin_country": "US"
//         },
//         {
//             "id": 174,
//             "logo_path": "/IuAlhI9eVC9Z8UQWOIDdWRKSEJ.png",
//             "name": "Warner Bros. Pictures",
//             "origin_country": "US"
//         }
//     ],
//     "production_countries": [
//         {
//             "iso_3166_1": "CN",
//             "name": "China"
//         },
//         {
//             "iso_3166_1": "JP",
//             "name": "Japan"
//         },
//         {
//             "iso_3166_1": "GB",
//             "name": "United Kingdom"
//         },
//         {
//             "iso_3166_1": "US",
//             "name": "United States of America"
//         }
//     ],
//     "release_date": "1987-12-09",
//     "revenue": 66700000,
//     "runtime": 153,
//     "spoken_languages": [
//         {
//             "english_name": "English",
//             "iso_639_1": "en",
//             "name": "English"
//         },
//         {
//             "english_name": "Japanese",
//             "iso_639_1": "ja",
//             "name": "日本語"
//         },
//         {
//             "english_name": "Mandarin",
//             "iso_639_1": "zh",
//             "name": "普通话"
//         }
//     ],
//     "status": "Released",
//     "tagline": "To survive in a world at war, he must find a strength greater than all the events that surround him.",
//     "title": "Empire of the Sun",
//     "video": false,
//     "vote_average": 7.5,
//     "vote_count": 1341
// }
