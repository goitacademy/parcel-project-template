//нужно получить ID карточки на удаление
let watchedArr = JSON.parse(localStorage.getItem('Watched'));

export default function deleteFromList(evt) {
  if (!evt.target.classList.contains('delete-btn')) {
    return;
  }

  if (watchedArr.includes(idQuery)) {
    const i = watchedArr.indexOf(idQuery);
    console.log(i);
    if (i >= 0) {
      const newArr = watchedArr.splice(i, 1);
      console.log(newArr);
    }
  }
}
