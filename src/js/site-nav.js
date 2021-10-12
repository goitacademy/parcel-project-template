import refs from '../js/refs.js';

const { libraryLink, header, btnBox, searchForm, homeLink } = refs;

libraryLink.addEventListener('click', addLibraryClass);
homeLink.addEventListener('click', addHomeClass);

function addLibraryClass(e) {
  header.classList.replace('header', 'header-library');
  const elem = e.target;
  homeLink.classList.remove('link__current');
  elem.classList.add('link__current');
  searchForm.classList.add('hide');
  btnBox.classList.remove('hide');
}

function addHomeClass(e) {
  header.classList.replace('header-library', 'header');
  const elem = e.target;
  libraryLink.classList.remove('link__current');
  elem.classList.add('link__current');
  searchForm.classList.remove('hide');
  btnBox.classList.add('hide');
}
