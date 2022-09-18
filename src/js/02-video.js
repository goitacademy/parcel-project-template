import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const throttle = require('lodash.throttle');
const VAULT_KEY = 'videoplayer-current-time';
const savedTime = localStorage.getItem(VAULT_KEY);

player.on('timeupdate', throttle(saveTime, 1000));

function saveTime({ seconds }) {
  localStorage.setItem( VAULT_KEY, seconds);
}

if (localStorage.getItem(VAULT_KEY)) {
  player.setCurrentTime(savedTime);
} 

 

