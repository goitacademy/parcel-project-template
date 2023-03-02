import { throttle } from 'lodash';
import Player from '@vimeo/player';
const iframe = document.querySelector('#vimeo-player');

const player = new Player(iframe, {
  id: 19231868,
  width: 640,
});

const currentTime = Number(localStorage.getItem('videoplayer-current-time'));

if (currentTime) {
  player.setCurrentTime(currentTime);
}

player.on(
  'timeupdate',
  throttle(data => {
    console.log(data);
    localStorage.setItem('videoplayer-current-time', data.seconds);
  }, 1000)
);
