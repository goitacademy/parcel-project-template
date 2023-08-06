function addLocalStorage(searchWord) {
  localStorage.setItem('wordLocalStorage', JSON.stringify(searchWord));
}

function getLocalStorage() {
  const itemLocalStorage = JSON.parse(localStorage.getItem('wordLocalStorage'));
  return itemLocalStorage;
}

function removeFromLocalStorage(id) {
  const itemLocalStorage = JSON.parse(localStorage.getItem('wordLocalStorage'));

  const filteredArray = itemLocalStorage.filter(item => +item.id !== +id);
  localStorage.setItem('wordLocalStorage', JSON.stringify(filteredArray));
}

// add functie remove from localStorage

export { getLocalStorage, addLocalStorage, removeFromLocalStorage };
