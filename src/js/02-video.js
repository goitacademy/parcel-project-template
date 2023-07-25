
import Player from '@vimeo/player';

const throttleTime = require('lodash.throttle');
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const storageKeyTime = 'videoplayer-current-time';

player.on('timeupdate', throttleTime(saveCurrentTime, 1000));

function saveCurrentTime({ seconds }) {
  localStorage.setItem(storageKeyTime, Math.round(seconds));
}

player
  .setCurrentTime(10)
  .then(function (seconds) {
    seconds = localStorage.getItem(storageKeyTime)
      ? player.setCurrentTime(localStorage.getItem(storageKeyTime))
      : player.setCurrentTime(0);
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        player.setCurrentTime(0);
        break;

      default:
        player.setCurrentTime(0);
        break;
    }
  });