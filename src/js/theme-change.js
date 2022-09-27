// ('.js-mode-dark' - это class для переключателя в <li><input> ... </input>)

let changeThemeBtn = document.querySelectorAll('.js-mode-dark'); 

changeThemeBtn.forEach(button => {
  button.addEventListener('click', function (e) {
    applyTheme(e.target.checked ? 'dark' : 'light');
  });
});

function applyTheme(themeName) {
  document.querySelector('body').setAttribute('class', `${themeName}`);
  localStorage.setItem('theme', themeName);
}

let activeTheme = localStorage.getItem('theme');
function setActiveTheme(paramet) {
  changeThemeBtn.forEach(button => {
    button.checked = paramet;
  });
}
if (activeTheme === null || activeTheme === 'light') {
  applyTheme('light');
  setActiveTheme(false);
} else if (activeTheme === 'dark') {
  applyTheme('dark');
  setActiveTheme(true);
}