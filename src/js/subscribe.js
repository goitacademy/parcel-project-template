(() => {
  document.querySelector('.form').addEventListener('submit', e => {
    e.preventDefault();

    new FormData(e.currentTarget).forEach((value, name) => console.log(`${name}: ${value}`));
    e.currentTarget.reset();
  });
})();