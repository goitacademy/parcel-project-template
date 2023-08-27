import Player from '@vimeo/player';

import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const CURRENT_TIME_KEY = 'videoplayer-current-time';

function getCurrentTime(currentTime) {
  localStorage.setItem(CURRENT_TIME_KEY, currentTime.seconds);
}
player.on('timeupdate', throttle(getCurrentTime, 1000));

const currentValue = localStorage.getItem(CURRENT_TIME_KEY) || 0;
player.setCurrentTime(currentValue);
