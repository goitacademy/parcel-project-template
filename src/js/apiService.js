import config from '../config.json';

export default class ApiService {
  constructor() {
    this.requestUrl = config.url;
    this.key = config.apiKey;
    this.searchQuery = '';
    this.units = config.units;
  }

  // запрос на сервер
  getData(collection, location) {
    const url = `${this.requestUrl}${collection}?q=${location}&units=${this.units}&appid=${this.key}`;
    console.log(url);

    return fetch(url).then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject('Something went wrong');
    });
  }
}

// const apiService = new ApiService({});
// apiService.getData('weather', 'Kiev');
// export { getData };
