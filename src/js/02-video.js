import Player from '@vimeo/player'

import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');   
const player = new Player(iframe);
const lodashTime = 1000;


    player.on('timeupdate', throttle( e => {
        localStorage.setItem("videoplayer-current-time", e.seconds, lodashTime)
    }));

    
player.setCurrentTime(localStorage.getItem("videoplayer-current-time") || 0)
    .catch(function (error) {
        console.error(error)
    });
