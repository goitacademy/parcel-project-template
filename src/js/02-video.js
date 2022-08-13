import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const STORAGE_KEY = 'videoplayer-current-time';
const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

function onPlay({ seconds }) {
  localStorage.setItem(STORAGE_KEY, seconds);
}

player.on('timeupdate', throttle(onPlay, 1000));
const savedSettings = localStorage.getItem(STORAGE_KEY);
const parsedSettings = JSON.parse(savedSettings);
player.setCurrentTime(parsedSettings);
