export function singleRequest(id) {
	const API_KEY = '6914e86918040074e2fe382ba8e8cb5e';
	const BASE_URL = 'https://api.themoviedb.org/3/';

	return fetch(`${BASE_URL}movie/${id}?api_key=${API_KEY}`)
		.then(response => response.json())
		.catch(error => console.log(error));
}
