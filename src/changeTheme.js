const refs = {
  body: document.querySelector('body'),
  switch: document.querySelector('.js-switch-input'),
};

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

refs.switch.addEventListener('change', setClassList);
refs.switch.addEventListener('change', setLocalStorage);

function setClassList(e) {
  e.currentTarget.checked ? switchOn() : switchOff();
}


function switchOn() {
  refs.body.classList.add(Theme.DARK);
  refs.body.classList.remove(Theme.LIGHT);
}


function switchOff() {
  refs.body.classList.add(Theme.LIGHT);
  refs.body.classList.remove(Theme.DARK);
}


// function setClassList(e) {
//   const check = refs.switch.checked;

//   if (check) {
//     refs.body.classList.add(Theme.DARK);
//     refs.body.classList.remove(Theme.LIGHT);
//   } else {
//     refs.body.classList.add(Theme.LIGHT);
//     refs.body.classList.remove(Theme.DARK);
//   }
// }


// Улучшенный вариант( рекомендации ментора)

function setLocalStorage(e) {
const check = refs.switch.checked ? Theme.DARK : Theme.LIGHT;
localStorage.setItem("theme", check);
}

const themeInLocal = localStorage.getItem("theme") || Theme.LIGHT;
refs.body.classList.add(themeInLocal);
refs.switch.checked = themeInLocal === Theme.DARK;


// function setLocalStorage(e) {
   
//   const check = refs.switch.checked;

//   if (check) {
//     localStorage.setItem('theme', Theme.DARK);
//   } else {
//     localStorage.removeItem('theme');
//     localStorage.setItem('theme', Theme.LIGHT);
//   }
// }
// const themeInLocal = localStorage.getItem('theme');

// if (themeInLocal === Theme.DARK) {
//   refs.body.classList.add(Theme.DARK);
//   refs.switch.checked = true;
// }






