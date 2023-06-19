function toggleModals(id) {
  document.getElementById(id).classList.toggle('hidden-modal');
}

function showOverlay(id) {
  document.getElementById(id).classList.toggle('show-produc-info');
}

const mobileMenuBtns = document.querySelectorAll('.mobile-menu__item');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuBtns.forEach((item) =>
  item.addEventListener('click', function () {
    mobileMenu.classList.remove('is-open');
  })
);

function buyNowBtn() {
  const modal = document.querySelector('[data-modal]');
  mobileMenu.classList.remove('is-open');
  modal.classList.toggle('is-hidden');
}

// try slider

const slides = [
  {
    id: 1,
    name: 'Emily, Los Angeles',
    img: './images/customer-reviews/testimonials1-90w-min.png',
    text: 'I tried the salted caramel ice cream and it was heavenly! The caramel was perfectly balanced with a touch of saltiness. I highly recommend it!',
  },
  {
    id: 2,
    name: 'Anna, New York',
    img: './images/customer-reviews/testimonials2-90w-min.png',
    text: 'The pistachio ice cream was a delightful surprise. The flavor was not overpowering and the chunks of nuts added a nice crunch. Definitely worth trying!',
  },
  {
    id: 3,
    name: 'Sarah, Los Angeles',
    img: './images/customer-reviews/testimonials3-90w-min.png',
    text: "The vegan chocolate ice cream exceeded my expectations. It was incredibly creamy and rich, and I couldn't even tell it was vegan. A great option for those with dietary restrictions.",
  },
];

let currentSelection = 0;

const personImage = document.getElementById('person-image');
const personReview = document.getElementById('person-review');
const personName = document.getElementById('person-name');
const btns = document.querySelectorAll('.review-btn');
console.log(btns);

window.addEventListener('DOMContentLoaded', function () {
  showPerson();
});

function showPerson() {
  const person = slides[currentSelection];
  personImage.src = person.img;
  personName.textContent = person.name;
  personReview.textContent = person.text;
}

const svgBtns = document.querySelectorAll('.review-btn__selected');

btns.forEach(function (btn, index) {
  btn.addEventListener('click', function () {
    svgBtns.forEach(function (item) {
      if (!item.classList.contains('hidden-items')) {
        item.classList.add('hidden-items');
      }
    });
    btns.forEach(function (item) {
      if (item.classList.contains('btn-selected')) {
        item.classList.remove('btn-selected');
      }
    });
    btn.classList.add('btn-selected');
    svgBtns[index].classList.remove('hidden-items');
    currentSelection = index;
    showPerson();
  });
});
