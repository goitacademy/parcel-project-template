import popupMovieTpl from '../templates/popup-movie.hbs';
import FilmsApiService from "./api-service.js";
import { addToWatchedList, addToQueueList } from "./listsAddServises.js";

const refs = {
	body: document.querySelector("body"),
	popup: document.querySelector(".js-popup"),
	popupOverlay: document.querySelector(".popup-overlay"),
	movieField: document.querySelector(".popup-movie"),
	btnClose: document.querySelector(".js-close"),
	filmsApiService: new FilmsApiService(),
}

export function startPopup(id) {
	refs.filmsApiService.singleRequest(id)
		.then(film => renderPage(film))
		.catch(error => console.log(error));

	refs.body.classList.add("popup-open");
	refs.popup.classList.add("is-open");
	refs.movieField.addEventListener("click", checkClick);
	refs.btnClose.addEventListener("click", closePopup);
	refs.popupOverlay.addEventListener("click", closePopup);
	window.addEventListener("keyup", closePopup);
}

function renderPage(film) {
	const markup = popupMovieTpl(film);
	refs.movieField.innerHTML = markup;
	checkMarkup();


function closePopup({ type, key }) {
	const clearPopup = () => {
		refs.body.classList.remove("popup-open");
		refs.popup.classList.remove("is-open");
		refs.btnClose.removeEventListener("click", closePopup);
		refs.popupOverlay.removeEventListener("click", closePopup);
		refs.movieField.removeEventListener("click", checkClick);
		window.removeEventListener("keyup", closePopup);
		refs.movieField.innerHTML = "";
	}

	if (type === "keyup") {
		if (key === "Escape") {
			clearPopup();
		}
	} else {
		clearPopup();
	}
}

function checkMarkup() {
	const avVote = document.querySelector(".vote-average");
	const genres = document.querySelector(".info-genre");
	const avVoteValue = avVote.textContent;
	const genresValue = genres.textContent;

	if (!avVoteValue.includes(".")) {
		avVote.textContent = avVoteValue.concat(".0");
	}

	genres.textContent = genresValue.slice(0, genresValue.lastIndexOf(","));
}

function checkClick(evt) {
	const poster = document.querySelector(".popup-poster");
	if ([...evt.target.classList].includes("js-watched")) {
		addToWatchedList(poster.dataset.id);
	}
	if ([...evt.target.classList].includes("js-queue")) {
		addToQueueList(poster.dataset.id);
	}
}