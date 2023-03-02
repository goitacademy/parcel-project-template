import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player(document.querySelector('iframe'));

player.on('timeupdate', throttle(playtimeSave, 1000));

function playtimeSave() {
  player.getCurrentTime().then(function (seconds) {
    localStorage.setItem('videoplayer-current-time', seconds);
  });
}

player.setCurrentTime(localStorage.getItem('videoplayer-current-time') || 0);
