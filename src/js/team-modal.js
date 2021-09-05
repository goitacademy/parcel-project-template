import * as basicLightbox from './basicLightbox.min.js';
import renderTeamModalMarkup from '../templates/team-modal.hbs';
import team from '../our-team.json';

let markUp = renderTeamModalMarkup(team);

basicLightbox.create(markUp).show();
