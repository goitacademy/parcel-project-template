export default  {
    API_KEY: 'f6fab6ea4000c88b7ccf1769aeb3013f',
    page: 1,

async fetchDataDb(query) {
    try {
        const response = await fetch(` https://api.themoviedb.org/3/search/movie?api_key=${this.API_KEY}&language=en-US-ru&query=${query}&page=${this.page}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('ошибка', error);
    };
    },
    
    changePage(number) {
        this.page = number;
    }
};