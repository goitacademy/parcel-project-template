import * as basicLightbox from './basicLightbox.min.js';
import renderTeamModalMarkup from '../templates/team-modal.hbs';
import team from '../our-team.json';

const teamLink = document.querySelector('.team__link');

teamLink.onclick = onClickTeam;

function onClickTeam(event) {
  event.preventDefault();
  const modal = basicLightbox.create(renderTeamModalMarkup(team));
  modal.show();
  const teamModal = document.querySelector('.team-modal');
  document.onkeydown = evt => {
    if (evt.code === 'Escape') modal.close();
  };
  teamModal.onclick = () => modal.close();
}
