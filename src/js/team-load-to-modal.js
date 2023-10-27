import { teamList } from './team';
import refs from './refs';

refs.footerLink.addEventListener('click', onOpenModal);

function loadIntoTeamModal(list) {
  const markup = list
    .map(member => {
      return `
      <li class="member__card">
        <div class="member__thumb">        
            <img class="member__image" width='120' 
            src="${member.photo}"
            alt=${member.name}
            loading="lazy"
            />      
        </div>
        <div class="member__info">
          <p class="member__name">${member.name}</p>
          <a class="member__link member__link-git" 
             href="${member.github}" 
             target="_blank">github</a>
          <a class="member__link" 
          href="${member.linkedin}" 
          target="_blank">linkedin</a>
          <p class="member__role">${member.role ?? ''}</p>
        </div>
      </li>`;
    })
    .join('');

  refs.modalRef.innerHTML = '';
  refs.teamRef.innerHTML = markup;
}

function onOpenModal(e) {
  document.body.classList.add('show-modal');
  window.addEventListener('keydown', onEscKeyPress);
  loadIntoTeamModal(teamList);
}

function onCloseModal() {
  document.body.classList.remove('show-modal');
  refs.teamRef.innerHTML = '';
}

function onBackDropClick(event) {
  if (event.currentTarget === event.target) {
    onCloseModal();
  }
}

function onEscKeyPress(event) {
  if (event.code !== 'Escape') {
    return;
  }

  window.removeEventListener('keydown', onEscKeyPress);
  onCloseModal();
}
