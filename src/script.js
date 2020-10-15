document.getElementById('burgerButton').addEventListener('click', function () {
  document.getElementById('openMenu').style.display = 'block';
  document.getElementById('burgerButton').style.opacity = '0';
  document.getElementById('buyLink').style.opacity = '0';
});

document.getElementById('iconClose').addEventListener('click', function () {
  document.getElementById('openMenu').style.display = 'none';
  document.getElementById('burgerButton').style.opacity = '1';
  document.getElementById('buyLink').style.opacity = '1';
});
