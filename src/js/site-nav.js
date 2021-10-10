import refs from './refs';
const { header, btnBox, searchForm, homeLink, libraryLink } = refs;

libraryLink.addEventListener('click', addLibraryClass);
homeLink.addEventListener('click', addHomeClass);

function addLibraryClass(e) {
  header.classList.replace('header', 'header-library');
  const elem = e.target;
  homeLink.classList.remove('link__current');
  elem.classList.add('link__current');
  searchForm.classList.add('form-none');
  btnBox.classList.remove('buttons-none');
}

function addHomeClass(e) {
  header.classList.replace('header-library', 'header');
  const elem = e.target;
  libraryLink.classList.remove('link__current');
  elem.classList.add('link__current');
  searchForm.classList.remove('form-none');
  btnBox.classList.add('buttons-none');
}
