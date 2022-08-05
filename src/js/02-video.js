import Player from "@vimeo/player";
import { throttle } from "lodash";

const iframe = document.querySelector("#vimeo-player");
const player = new Player(iframe);

function onPlay({ seconds }) {
  localStorage.setItem("videoplayer-current-time", seconds);
}

player.on("timeupdate", throttle(onPlay, 1000));
const savedSettings = localStorage.getItem("videoplayer-current-time");
const parsedSettings = JSON.parse(savedSettings);
console.log(parsedSettings);
player.setCurrentTime(parsedSettings);
