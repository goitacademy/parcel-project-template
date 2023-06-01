'use strict';

const iframe = document.querySelector('iframe');

player.on('play', function () {
  console.log('played the video!');
});

const onPlay = function (video) {
  console.log(video.seconds);
  localStorage.setItem('videoplayer-current-time', video.seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));

let currentTime = localStorage.getItem('videoplayer-current-time');
player.setCurrentTime(currentTime);
