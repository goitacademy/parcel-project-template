// const iframe = document.querySelector('iframe');
import Player from '@vimeo/player';

const video = document.querySelector('#vimeo-player');
const player = new Player(video);
const videoTime = setInterval(() => {
  player.getCurrentTime().then(time => {
    localStorage.setItem('currentTime', time);
  });
}, 1000);

player
  .setCurrentTime(localStorage.getItem('currentTime'))
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  });
