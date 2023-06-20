var modal1 = document.getElementById('cream-modal');
var modal2 = document.getElementById('coffee-modal');
var modal3 = document.getElementById('milk-modal');

// Get the button that opens the modal
var btn1 = document.getElementById('creambtn');
var btn2 = document.getElementById('coffeebtn');
var btn3 = document.getElementById('milkbtn');

// When the user clicks on the button, open the modal

btn1.onclick = function () {
  modal1.style.display = 'block';
};

btn2.onclick = function () {
  modal2.style.display = 'block';
};

btn3.onclick = function () {
  modal3.style.display = 'block';
};
