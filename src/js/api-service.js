export default  {
    API_KEY: '98387aa57f28e0e3eee6fec2a9b53ef3',
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