import axios from 'axios';

const BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1/';

export default class CocktailAPI {
  KEY = 'cocktails';
  INGREDIENTS = 'ingredients';
  constructor() {
    this.iid = [];
    this.name = '';
    this.letter = '';
    this.page = 1;
    this.drinks = '';
    this.searchQuery = '';
    this.category = '';
    this.drinks = '';
    this.ingredients = [];
    this.favoriteDrinks = [];
    this.favoriteIngredients = [];
  }

  //   ===>>> by Name

  async getCocktailByName() {
    try {
      return await axios(`${BASE_URL}search.php?s=${this.searchQuery}`);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  //  ====>> by Letter

  async getCocktailByLetter() {
    try {
      return await axios(`${BASE_URL}search.php?f=${this.letter}`);
    } catch (error) {
      alert(error);
    }
  }

  //   ====>> by ID

  async getCocktailsId(id) {
    try {
      return await axios(`${BASE_URL}lookup.php?i=${id || this.id}`);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  //   =====>>> by Ingredients

  async getCocktailByIngredient(ingredients) {
    try {
      return await axios(
        `${BASE_URL}search.php?i=${ingredients || this.ingredients}`
      );
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async getIngredientById(iid) {
    try {
      return await axios(`${BASE_URL}lookup.php?iid=${iid || this.iid}`);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async getRandomCocktail() {
    try {
      let arr = [];
      for (let i = 0; i < 9; i += 1) {
        const cocktail = axios(BASE_URL + 'random.php');
        arr.push(cocktail);
      }

      const promise = await Promise.all(arr).then(response => {
        return response;
      });
      return promise;
    } catch (error) {
      throw new Error(error);
    }
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }

  addFavoriteDrinkById(idDrink) {
    this.favoriteDrinks.push(idDrink);
  }

  removeFavoriteDrinkById(idDrink) {
    this.favoriteDrinks = this.favoriteDrinks.filter(data => data !== idDrink);
  }
}