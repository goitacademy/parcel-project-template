var num = 15;

var modalBtn = document.querySelector('.open4');
var closeBtn = document.querySelector('.close');

var modalContainer = document.querySelector('.modals');
var holdModals = document.createDocumentFragment();

for (var i = 0; i < num; i++) {
  var div = document.createElement('div');
  div.classList.add('modal-drop');
  div.style.top = Math.floor(Math.random() * 100) + 'vh';
  div.style.left = Math.floor(Math.random() * 100) + 'vw';
  div.style.transitionDelay = Math.random() + 's';
  holdModals.appendChild(div);
}
console.log();
modalContainer.appendChild(holdModals);

modalBtn.addEventListener('click', function () {
  modalContainer.style.display = 'block';
  window.setTimeout(function () {
    modalContainer.classList.add('active');
  }, 0.1);
});

closeBtn.addEventListener('click', function () {
  modalContainer.classList.remove('active');

  window.setTimeout(function () {
    modalContainer.style.display = 'none';
  }, 3000);
});
