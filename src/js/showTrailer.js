import { apiService } from '../index';
import getPlayerMarkup from '../templates/player.hbs';
import * as basicLightbox from './basicLightbox.min.js';
import showAlert from './show-allert.js';

prepareYouTubeAPI();

let modal;

export default function showTrailer(e) {
  const id = e.target.dataset.id;
  apiService.getTrailerKeyByMovieId(id).then(key => {
    if (!key) {
      showAlert('Unfortunately, no video found');
      return;
    }
    modal = basicLightbox.create(getPlayerMarkup(key));
    modal.show();
    document.addEventListener('keydown', evt => {
      if (evt.code === 'Escape') modal.close();
    });

    createYouTubePlayerAPI(key);
  });
}

function prepareYouTubeAPI() {
  var tag = document.createElement('script');
  tag.src = 'https://www.youtube.com/player_api';
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

function createYouTubePlayerAPI(key) {
  new YT.Player('ytplayer', {
    height: '100%',
    width: '100%',
    videoId: key,
    origin: 'https://tkachenko-serhii.github.io/filmoteka_project_group_1/',
    events: {
      onReady: onPlayerReady,
    },
  });
}

function onPlayerReady(e) {
  const state = e.target.getPlayerState();
  if (state === -1) {
    modal.close();
    showAlert('Unfortunately, video is currently unavailable');
    return;
  }
}
