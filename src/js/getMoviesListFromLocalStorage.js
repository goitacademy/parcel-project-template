// функция, которая по ключу (watched или queue) возвращает масив с обьектами фильмов
// из localStorage, если по даному ключу нет масива (пользователь впервые будет добавлять фильм в библиотеку),
// то создаётся пустой масив
export default function getMoviesFromLocalStorage(key) {
  const res = Array.isArray(JSON.parse(localStorage.getItem(key)))
    ? JSON.parse(localStorage.getItem(key))
    : [];
  return res;
}
