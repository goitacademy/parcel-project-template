let position = 0;
let currentItem = 1;
const slidesToShow = 1;
const slidesToScroll = 1;
const container = document.querySelector('.slider-container');
const track = document.querySelector('.slider-track');
const btnNext = document.querySelector('.btn-next');
const btnPrev = document.querySelector('.btn-prev');
const items = document.querySelectorAll('.slider-item');
const itemsCount = items.length;
const itemWidth = container.clientWidth / slidesToShow;
const movePosition = slidesToScroll * itemWidth;

items.forEach((item) => {
	item.style.minWidth = `${itemWidth}px`;
});

btnNext.addEventListener('click', () => {
	const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
	position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

	setPosition();
	checkButtons();

	currentItem = Math.abs(position) / itemWidth + 1;
	setNavigator(currentItem);
})

btnPrev.addEventListener('click', () => {
	const itemsLeft = Math.abs(position) / itemWidth;
	position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

	setPosition();
	checkButtons();

	currentItem = Math.abs(position) / itemWidth + 1;
	setNavigator(currentItem);
})

const setPosition = () => {
	track.style.transform = `translateX(${position}px)`;
}

const checkButtons = () => {
	btnPrev.disabled = position === 0;
	btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
}

checkButtons();

setNavigator(currentItem);

function setNavigator(current) {
	resetNavigator();
	document.querySelector(`.navigation-item:nth-child(${current})`).classList.add('active-slide');
}

function resetNavigator() {
	document
		.querySelectorAll('.navigation-item.active-slide')
		.forEach((el) => { el.classList.remove('active-slide') });
}