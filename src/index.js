import './sass/main.scss';
import menuElement from './menu.json';
import menuTemplate from './templates/templates.hbs';
import './changeTheme.js';
import './styles.css';



let menu = document.querySelector('.js-menu');

function buildMenu(array) {
    const markup = array.map(post => menuTemplate(post)).join('');
    menu.insertAdjacentHTML('beforeend', markup);
}

buildMenu(menuElement);
