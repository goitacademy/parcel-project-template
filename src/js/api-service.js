//Example API Request
//https://api.themoviedb.org/3/movie/550?api_key=6914e86918040074e2fe382ba8e8cb5e
export default async (name, page) => {
	try {
		const db = await fetch(`https://developers.themoviedb.org/3/trending/all/week?api_key=6914e86918040074e2fe382ba8e8cb5e`);
		return db.json();
	} catch (error) {
		return error;
	}
}
