import * as basicLightbox from './basicLightbox.min.js';
import renderTeamModalMarkup from '../templates/team-modal.hbs';
import team from '../our-team.json';
import getRefs from './get-refs';
const refs = getRefs();
let modal = null;

refs.teamLink.onclick = onClickTeam;

function onClickTeam(event) {
  event.preventDefault();
  modal = basicLightbox.create(renderTeamModalMarkup(team));
  modal.show();

  refs.bodyRef.style.overflow = 'hidden';
  const teamModal = document.querySelector('.basicLightbox');
  document.querySelector('.basicLightbox__placeholder').classList.add('team__placeholder');
  document.onkeydown = evt => {
    if (evt.code === 'Escape') closeModal();
  };
  teamModal.onclick = () => {
    closeModal();
  };
}

function closeModal() {
  refs.bodyRef.style.overflow = 'auto';
  modal.close();
}
