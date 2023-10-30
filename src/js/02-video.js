import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
let player;
const savedTime = localStorage.getItem('videoplayer-current-time');
player = new Player(iframe);

const saveTimeThrottled = throttle(function (currentTime) {
  localStorage.setItem('videoplayer-current-time', currentTime);
}, 1000);

player.on('play', function () {
  if (savedTime) {
    player.setCurrentTime(savedTime);
  }
  player.off('timeupdate');

  player.on('timeupdate', function (data) {
    saveTimeThrottled(data.seconds);
  });
});

player.on('ended', function (data) {
  saveTimeThrottled(data.seconds);
});
player.ready().then(function () {
  if (savedTime) {
    player.setCurrentTime(savedTime);
  }
});

player.on('ended', function (data) {
  saveTimeThrottled(data.seconds);
});
