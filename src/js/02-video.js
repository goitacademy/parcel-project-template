import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const LOCAL_VIDEO_TIME_KEY = 'videoplayer-current-time';
const vimeoPlayer = document.querySelector('#vimeo-player');
const player = new Player(vimeoPlayer);

const onPlay = event => {
  localStorage.setItem(LOCAL_VIDEO_TIME_KEY, event.seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));

player.setCurrentTime(
  JSON.parse(localStorage.getItem(LOCAL_VIDEO_TIME_KEY)) || 0
);