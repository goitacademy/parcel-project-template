/////////////////////////ТЕСТОВЫЕ ДАННЫЕ/////////////////////////
const WATCHEDKEY = 'watched';
const QUEUEKEY = 'queue';
const watchedTestArray = [65494, 615665, 62286, 560050]; //тестовый
const queueTestArray = [340102, 400160, 590706]; //тестовый
localStorage.setItem(WATCHEDKEY, JSON.stringify(watchedTestArray));
localStorage.setItem(QUEUEKEY, JSON.stringify(queueTestArray));
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
//import getUserCollection from './js/get-local-storage';

const apiKey = '6914e86918040074e2fe382ba8e8cb5e';
const BASEURL = 'https://api.themoviedb.org/3/movie/';

function getArrayID(goal) {
  return JSON.parse(localStorage.getItem(goal));
}

function getMovieByID(id) {
  const url = `${BASEURL}${id}?api_key=${apiKey}`;
  try {
    return fetch(url).then(r => r.json());
  } catch (error) {
    console.log('Что-то пошло не так', error);
  }
}

export default async function getUserCollection(goal) {
  const userCollectionPromise = [];
  const arrayID = getArrayID(goal);
  arrayID.map(id => {
    userCollectionPromise.push(getMovieByID(id));
  });
  const userCollection = Promise.all(userCollectionPromise);

  return await userCollection;
}
