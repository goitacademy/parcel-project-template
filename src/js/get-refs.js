export default function getRefs() {
  return {
    container: document.querySelector('.container-js'),
    watchedBtn: document.querySelector('.watchedBtn-js'),
    queueBtn: document.querySelector('.queueBtn-js'),
    movies: document.querySelector('.movies__colection'),
    containerEl: document.querySelector('.container-js'),
    checkBox: document.getElementById('theme-switch-toggle'),
  };
}
