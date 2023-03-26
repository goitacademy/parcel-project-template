import Player from '@vimeo/player';
var _ = require('lodash');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
let videoStartTime;
try {
  const startVideo = localStorage.getItem('videoStart');
  videoStartTime = JSON.parse(startVideo);
} catch (error) {
  videoStartTime = 0;
  console.log(error.name); // "SyntaxError"
  console.log(error.message); // Unexpected token W in JSON at position 0
}
player.setCurrentTime(videoStartTime);

player.on('play', onPlay);
player.on('pause', onPause);

function onPlay() {
  console.log('played the video!');
  player.on('timeupdate', _.throttle(setTime, 1000));
}
function onPause() {
  console.log('pause the video!');
  player.off('timeupdate');
}
function setTime({ seconds }) {
  localStorage.setItem('videoStart', JSON.stringify(seconds));
}
