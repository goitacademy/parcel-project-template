var buttonNewYork = document.getElementById('button-new-york');
var buttonChicago = document.getElementById('button-chicago');
var buttonLosAngeles = document.getElementById('button-los-angeles');
var myMap = document.getElementById('map-block');
var myMapPreload = document.getElementById('map');
var loading = document.getElementById('map-text');
var frame = document.createElement('iframe');
var location = document.getElementById('location');

location.onclick = function () {
  loading.classList.remove('visually-hidden');
  frame.onload = function () {
    loading.classList.add('visually-hidden');
  };
  frame.src =
    'https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d48428.30594707363!2d-73.9796606!3d40.6570195!3m2!1i1024!2i768!4f13.1!2m1!1snew%20york%20ice%20cream%20house!5e0!3m2!1suk!2sua!4v1613828764785!5m2!1suk!2sua';
  document.getElementById('map-block').appendChild(frame);
};

buttonNewYork.onclick = function () {
  loading.classList.remove('visually-hidden');
  frame.onload = function () {
    loading.classList.add('visually-hidden');
  };
  frame.src =
    'https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d48428.30594707363!2d-73.9796606!3d40.6570195!3m2!1i1024!2i768!4f13.1!2m1!1snew%20york%20ice%20cream%20house!5e0!3m2!1suk!2sua!4v1613828764785!5m2!1suk!2sua';
  document.getElementById('map-block').appendChild(frame);
};

buttonChicago.onclick = function () {
  loading.classList.remove('visually-hidden');
  frame.onload = function () {
    loading.classList.add('visually-hidden');
  };
  frame.src =
    'https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d190207.33316848055!2d-87.732400769932!3d41.850051075475314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1schicago%20ice%20cream%20house!5e0!3m2!1suk!2sua!4v1613829360924!5m2!1suk!2sua';
  document.getElementById('map-block').appendChild(frame);
};

buttonLosAngeles.onclick = function () {
  loading.classList.remove('visually-hidden');
  frame.onload = function () {
    loading.classList.add('visually-hidden');
  };
  frame.src =
    'https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d105758.27208882016!2d-118.387350777313!3d34.0708984337596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1slos%20angeles%20ice%20cream%20house!5e0!3m2!1suk!2sua!4v1613829526116!5m2!1suk!2sua';
  document.getElementById('map-block').appendChild(frame);
};
