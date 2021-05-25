import config from '../config.json';

class ApiService {
  constructor() {
    this.requestUrl = config.url;
    // this.urlIcon = config.urlIcon;
    this.key = config.apiKey;
    this.searchQuery = '';
    this.units = config.units;
    this.location = 'Kiev';
  }

  // запрос на сервер
  getData(collection) {
    const url = `${this.requestUrl}${collection}?q=${this.location}&units=${this.units}&appid=${this.key}`;
    console.log(url);

    return fetch(url).then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject('Something went wrong');
    });
  }

  //получает icon id как параметр
  getIcon() {
    const urlIcon = `${this.urlIcon}10d@2x.png`;
  }

  //   genData {
  //     character: (data) => {
  //         return {
  //             character: data.results,
  //             // pagination: genPagination(data.info, 'character')
  //         };
  //     },

  //     location: (data) => {
  //         return {
  //             location: data.results,
  //             // pagination: genPagination(data.info, 'location')
  //         };
  //     },

  //     episode: (data) => {
  //         return {
  //             episode: data.results,
  //             pagination: genPagination(data.info, 'episode')
  //         };
  //     }
  // };
}

const apiService = new ApiService({});

export default apiService;

// const apiService = new ApiService({});
// apiService.getData('weather', 'Kiev');
// export { getData };
