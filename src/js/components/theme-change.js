import refs from '../refs.js'

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const THEME_KEY = 'theme';

refs.switch.addEventListener('change', themeChange)

function themeChange(event) {
  refs.body.classList.toggle(Theme.DARK)
  refs.body.classList.toggle(Theme.LIGHT)

  const checked = refs.switch.checked
  
  if (checked) {
    localStorage.setItem(THEME_KEY, Theme.DARK)
  }
  else {
    localStorage.removeItem(THEME_KEY, Theme.DARK)
    localStorage.setItem(THEME_KEY, Theme.LIGHT)
  }
}

const currentTheme = localStorage.getItem('theme')
if (currentTheme === Theme.DARK) {
  refs.body.classList.add(Theme.DARK)
  refs.switch.checked = true
 }