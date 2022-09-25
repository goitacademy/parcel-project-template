import Player from  '@vimeo/player'
import throttle from 'lodash.throttle'

const CURRENT_TIME = "videoplayer-current-time"

const vidPlayerRef = document.querySelector('#vimeo-player')
const player = new Player(vidPlayerRef)

player.setCurrentTime(localStorage.getItem(CURRENT_TIME) || 0)
player.on('timeupdate', throttle(onTimeUpdate, 1000))

function onTimeUpdate({ seconds }) {
    localStorage.setItem(CURRENT_TIME, seconds);
}