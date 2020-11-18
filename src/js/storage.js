// Принимает ключ `key` по которому будет произведена выборка.
const load = key => {
  try {
    const serializedState = localStorage.getItem(key);

    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (err) {
    console.error('Get state error: ', err);
  }
};

// Принимает ключ `key` и значение `value`.
const save = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (err) {
    console.error('Set state error: ', err);
  }
};

// Принимает ключ `key` и значение `value`.
const remove = (key, value) => {
  const serializedState = load(key);
  serializedState.splice(serializedState.indexOf(value), 1);
  console.log("remove -> serializedState", serializedState);
  save (key, serializedState);
};

export default { load, save, remove };