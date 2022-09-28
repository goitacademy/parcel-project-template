const desktopFormRef = document.querySelector('.js-form-desktop');
const mobilFormRef = document.querySelector('.js-form-mobil');

desktopFormRef.addEventListener('submit', onFormSubmit);
mobilFormRef.addEventListener('submit', onFormSubmit);

let dataFromInput = '';

function onFormSubmit(evt) {
  evt.preventDefault();
  dataFromInput = evt.target.input.value;
  console.log(dataFromInput);
}
