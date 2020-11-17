// import popupMovieTpl from '../templates/popup-movie.hbs';
import { singleRequest } from "./api-service.js";

const refs = {
	popup: document.querySelector(".js-popup"),
	popupOverlay: document.querySelector(".popup-overlay"),
	btnClose: document.querySelector(".js-close")
}

export function startPopup(id) {
	singleRequest(id).then(data => console.log(data));

	refs.popup.classList.add("is-open");
	refs.btnClose.addEventListener("click", closePopup);
	refs.popupOverlay.addEventListener("click", closePopup);
	window.addEventListener("keyup", closePopup);
}

function closePopup({ type, key }) {
	const clearPopup = () => {
		refs.popup.classList.remove("is-open");
		refs.btnClose.removeEventListener("click", closePopup);
		refs.popupOverlay.removeEventListener("click", closePopup);
		window.removeEventListener("keyup", closePopup);
	}

	if (type === "keyup") {
		if (key === "Escape") {
			clearPopup();
		}
	} else {
		clearPopup();
	}
}