const themeSwitchDeskRef = document.querySelector('[data-switcher-desktop]');
const themeSwitchMobRef = document.querySelector('[data-switcher-mobil]');

themeSwitchMobRef.addEventListener('click', function (e) {
  applyTheme(e.target.checked ? 'dark' : 'light');
});

themeSwitchDeskRef.addEventListener('click', function (e) {
  applyTheme(e.target.checked ? 'dark' : 'light');
});

function applyTheme(themeName) {
  document.querySelector('body').setAttribute('class', `${themeName}`);
  localStorage.setItem('theme', themeName);
  if (themeName === 'dark') {
    document
      .querySelector('.header__mobil')
      .classList.replace('light', themeName);
  } else {
    document
      .querySelector('.header__mobil')
      .classList.replace('dark', themeName);
  }
}

let activeTheme = localStorage.getItem('theme');

function setActiveTheme(paramet) {
  themeSwitchMobRef.checked = paramet;
  themeSwitchDeskRef.checked = paramet;
}
console.log(activeTheme);
if (activeTheme === null || activeTheme === 'light') {
  applyTheme('light');
  setActiveTheme(false);
} else if (activeTheme === 'dark') {
  applyTheme('dark');
  setActiveTheme(true);
}
