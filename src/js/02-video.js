import vimeoPlayer from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new vimeoPlayer(iframe);
const LOCALSTORAGE_KEY = 'videoplayer-current-time';

function onPlay(time) {
  console.log('time', time.seconds);
  localStorage.setItem(LOCALSTORAGE_KEY, time.seconds);
}
player.on('timeupdate', throttle(onPlay, 1000));

player.setCurrentTime(localStorage.getItem(LOCALSTORAGE_KEY));
