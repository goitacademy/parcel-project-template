import axios from "axios";
    
const BASE_URL = "https://api.themoviedb.org/3/";
axios.defaults.baseURL = BASE_URL;
const API_KEY = "27c4b211807350ab60580c41abf1bb8c";

//в значение переменной queryParams засунула принудительно поиск по ключевому слову "cat"
//а так будет динамически подставляться

let queryParams = `search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=cat`;

//функция запроса - асинхронный код
async function getQueryFilm() {
    let url = BASE_URL + queryParams;
        
    try {
        const response = await axios.get(url);
        const data = response.data;
        console.log("результат запроса:",data);
        //массив объектов - популярные фильмы
        const film = data.results;
        console.log("массив объектов:", film);
        const totalResults = data.total_results;
        console.log("всего найдено фильмов:", totalResults);
        return data;
        } catch(error) {
                throw(error)
            }
}
getQueryFilm();
export default getQueryFilm;