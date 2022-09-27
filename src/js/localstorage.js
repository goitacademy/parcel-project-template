
// ===>>  БУДЕМ НАСТРАИВАТЬ ПОЗЖЕ 

import CocktailAPI from './getCoctailOption';

// import { includes } from 'lodash';
// const favorite = new CocktailAPI();

let cocktail = {
  idDrink: '',
};

//              -------Set to Local Storage-------
export function setCocktailToLocalStorage(id, payLoad) {
  let data = getCocktailStorageData(payLoad);
  data = data ? data : [];
  data.push(id);
  localStorage.setItem(payLoad, JSON.stringify(data));
}

//              -------Get from Local Storage-------
export function getCocktailStorageData(payLoad) {
  try {
    const jsonData = localStorage.getItem(payLoad);
    return jsonData ? JSON.parse(jsonData) : [];
  } catch (error) {
    console.log(error);
  }
}

//              -------Remove from Local Storage-------
export function removeFromLocalStorage(id, payLoad) {
  let data = getCocktailStorageData(payLoad);
  let index = data.indexOf(id);
  if (data.includes(id)) {
    data.splice(index, 1);
    localStorage.setItem(payLoad, JSON.stringify(data));
  }
}