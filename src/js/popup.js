import popupMovieTpl from '../templates/popup-movie.hbs';
import FilmsApiService from "./api-service.js";
import refs from './refs';
import { onModalButtons, clearListener } from './listsAddServises';

const filmsApiService = new FilmsApiService();

export function startPopup(id) {
	filmsApiService.singleRequest(id)
		.then(film => renderPage(film))
		.catch(error => console.log(error));

	refs.body.classList.add("popup-open");
	refs.popup.classList.add("is-open");
	refs.btnClose.addEventListener("click", closePopup);
	refs.popupOverlay.addEventListener("click", closePopup);
	window.addEventListener("keyup", closePopup);
}

function renderPage(film) {
	const markup = popupMovieTpl(film);
	refs.movieField.innerHTML = markup;
	checkMarkup();
	onModalButtons();
}

function closePopup({ type, key }) {
	const clearPopup = () => {
		refs.body.classList.remove("popup-open");
		refs.popup.classList.remove("is-open");
		refs.btnClose.removeEventListener("click", closePopup);
		refs.popupOverlay.removeEventListener("click", closePopup);
		window.removeEventListener("keyup", closePopup);
		refs.movieField.innerHTML = "";
		clearListener();
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
	const avVoteValue = avVote.textContent;

	if (!avVoteValue.includes(".")) {
		avVote.textContent = avVoteValue.concat(".0");
	}
}