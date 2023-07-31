function addLocalStorage(searchWord) {
  localStorage.setItem('wordLocalStorage', JSON.stringify(searchWord));
}

function getLocalStorage() {
  const itemLocalStorage = JSON.parse(localStorage.getItem('wordLocalStorage'));
  return itemLocalStorage;
}

// add functie remove from localStorage

export { getLocalStorage, addLocalStorage };
