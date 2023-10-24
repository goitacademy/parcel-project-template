import newElement from './gallery-task/newElement';
import Vimeo from '@vimeo/player';
import onPlay from './video-task/local-storage.js';
export const localStorageTimeKey = 'videoplayer-current-time';
const iframe = newElement('#vimeo-player');
const player = new Vimeo(iframe);

player.on('timeupdate', onPlay);
try {
  const time = JSON.parse(localStorage.getItem(localStorageTimeKey));
  player.setCurrentTime(time);
} catch (err) {
  console.log(err);
}
