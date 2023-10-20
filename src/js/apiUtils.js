import axios from 'axios';

const URL = 'https://api.themoviedb.org/3';
const API_KEY = '24996ba1a77f5ecd2a2a683701ea072b';

// Funcție pentru construirea URL-urilor

const constructUrl = (path, params = {}) => {
  const queryParams = new URLSearchParams(params); // Creează un obiect pentru gestionarea parametrilor URL
  queryParams.set('api_key', API_KEY); // Adaugă cheia API la parametrii URL
  return `${URL}${path}?${queryParams.toString()}`; // Construiește URL-ul final
};

// Funcție pentru efectuarea cererilor la API
const fetchData = async (path, params = {}) => {
  try {
    const url = constructUrl(path, params); // Construiește URL-ul pentru cerere
    const response = await axios.get(url); // Efectuează cererea la API folosind Axios
    return response.data; // Returnează datele obținute din răspunsul API
  } catch (error) {
    console.error(`Error fetching data from ${path}:`, error); // Gestionează erorile și afișează mesaje de eroare
    throw error; // Aruncă eroarea mai departe pentru a fi gestionată ulterior
  }
};

export { constructUrl, fetchData };
