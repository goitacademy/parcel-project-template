import { localStorageTimeKey } from '../02-video';
import _ from 'lodash';

const onPlay = _.throttle(function (data) {
  let watchedTime = data.seconds;
  localStorage.setItem(localStorageTimeKey, JSON.stringify(watchedTime));
}, 1000);

export default onPlay;
