import Player from '@vimeo/player';
var throttle = require('lodash.throttle');
const iframe  = document.querySelector('iframe')
const player = new Player(iframe, {
});

player.on('timeupdate', throttle(pause, 1000));
function pause(timeupdate) {
    var pause = timeupdate.seconds;
     localStorage.setItem('videoplayer-current-time', pause);
}

const currentTime = localStorage.getItem('videoplayer-current-time');
player.setCurrentTime(currentTime).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});