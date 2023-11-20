import Player from '@vimeo/player';
import  throttle  from 'lodash.throttle';
const player = new Player('vimeo-player', {
    id: 19231868,
    width: 640
});

const LOCAL_STORAGE_KEY = 'time-of-video'
const playFunc = () => {
    player.getCurrentTime().then(function(seconds) {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(seconds))
    });
}

player.on('timeupdate', throttle(playFunc, 1100))

const locFunc = localStorage.getItem(LOCAL_STORAGE_KEY)

player.on('play', function () {
    
        player.setCurrentTime(locFunc);
    
});

// player.on('play', player.setCurrentTime((JSON.parse(localStorage.getItem))))
