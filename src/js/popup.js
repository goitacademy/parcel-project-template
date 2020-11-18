import popupMovieTpl from '../templates/popup-movie.hbs';
import FilmsApiService from "./api-service.js";
import { onModalButtons } from './listsAddServises'

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
	refs.btnClose.addEventListener("click", closePopup);
	refs.popupOverlay.addEventListener("click", closePopup);
	window.addEventListener("keyup", closePopup);
}

function renderPage(film) {
	const markup = popupMovieTpl(film);
	refs.movieField.innerHTML = markup;
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
	}

	if (type === "keyup") {
		if (key === "Escape") {
			clearPopup();
		}
	} else {
		clearPopup();
	}
}