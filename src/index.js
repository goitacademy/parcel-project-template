function changeImages(n) {
const elements = document.getElementsByClassName('btn-item');
for (let i = 0; i < elements.length; i++) {
let item = elements[i];
item.classList.remove('btn-item-sel');
}
elements[n].classList.add('btn-item-sel');
let id = n + 1;
let card = document.getElementById('card' + id);
card.scrollIntoView();
}

