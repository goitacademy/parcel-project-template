import FilmsApiService from '../api-service';

const filmsApiService = new FilmsApiService();

function getArrayID(goal) {
  return JSON.parse(localStorage.getItem(goal));
}

export default async function getUserCollection(goal) {
  const userCollectionPromises = [];
  const arrayID = getArrayID(goal);
  if (arrayID < 1) return [];

  arrayID.map(id => {
    userCollectionPromises.push(filmsApiService.singleRequest(id));
  });
  const userCollection = Promise.all(userCollectionPromises);

  return await userCollection;
}
