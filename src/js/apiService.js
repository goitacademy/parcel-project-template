import config from '../config.json';

const getData = (collection, location) => {
  const path =
    config.url + collection + '?q=' + location + '&appid=' + 'units=metric' + config.apiKey;
  console.log(path);
  return fetch(path)
    .then(res => res.json())
    .catch(err => console.error(err));
};

console.log(getData('wheather', 'Kiev'));

export { getData };
