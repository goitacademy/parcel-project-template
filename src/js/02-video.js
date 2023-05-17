import getElement from './getElement.js';
import Vimeo from '@vimeo/player';
import onPlay from './video-task/set-to-local-storage.js';
export const localStorageTimeKey = 'videoplayer-current-time';
const iframe = getElement('#vimeo-player');
const player = new Vimeo(iframe);

player.on('timeupdate', onPlay);
try {
  const time = JSON.parse(localStorage.getItem(localStorageTimeKey));
  player.setCurrentTime(time);
} catch (err) {
  console.log(err);
}
