// Принимает ключ `key` по которому будет произведена выборка.
const load = key => {
  try {
    const localData = localStorage.getItem(key);
    localStorage.getItem('last-tab')

    return localData === null ? undefined : JSON.parse(localData);
  } catch (err) {
    console.error('Get state error: ', err);
  }
};

// Принимает ключ `key` и значение `value`.
const save = (key, value) => {
  try {
    const localData = JSON.stringify(value);
    localStorage.setItem(key, localData);
  } catch (err) {
    console.error('Set state error: ', err);
  }
};

// Принимает ключ `key` и значение `value`.
const remove = (key, value) => {
  const localData = load(key);
  localData.splice(localData.indexOf(value), 1);
  save(key, localData);
};

const keys = {
  WATCHEDKEY: 'WatchedList',
  QUEUEKEY: 'QueueList',
};


export default { load, save, remove, keys };