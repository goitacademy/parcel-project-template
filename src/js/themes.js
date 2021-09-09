import getRefs from './get-refs';
const refs = getRefs();

export const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const STOREGE_KEY = 'themeNow';
let themeNow = '';

document.addEventListener('DOMContentLoaded', checkThemeNow);
refs.checkBox.addEventListener('click', changeTheme);

function checkStoregeKey() {
  themeNow = localStorage.getItem(STOREGE_KEY);
  return themeNow;
}

function changeTheme() {
  checkStoregeKey();

  if (themeNow === 'light-theme') {
    localStorage.setItem(STOREGE_KEY, Theme.DARK);
    refs.containerEl.classList.replace(Theme.LIGHT, Theme.DARK);
  } else {
    localStorage.setItem(STOREGE_KEY, Theme.LIGHT);
    refs.containerEl.classList.replace(Theme.DARK, Theme.LIGHT);
  }
}

function checkThemeNow() {
  checkStoregeKey();

  switch (themeNow) {
    case 'light-theme':
      refs.containerEl.classList.add(Theme.LIGHT);
      refs.checkBox.checked = true;
      break;
    case 'dark-theme':
      refs.containerEl.classList.add(Theme.DARK);
      refs.checkBox.checked = false;
      break;
    default:
      localStorage.setItem(STOREGE_KEY, Theme.LIGHT), refs.containerEl.classList.add(Theme.LIGHT);
  }
}

export { checkThemeNow, changeTheme };
