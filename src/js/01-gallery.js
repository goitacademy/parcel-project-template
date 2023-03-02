import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const galleryContainer = document.querySelector(".gallery");
const imageMarkup = createItemsMarkup(galleryItems);
galleryContainer.insertAdjacentHTML("afterbegin", imageMarkup);
function createItemsMarkup(images) {
	return images
		.map(({ preview, original, description }) => {
			return `<li class = "gallery__item">
		<a class="gallery__link" href = ${original}>
		<img class="gallery__image" src = ${preview}
    alt = ${description} />
        </a>
        </li>`;
		})

.join("");

  }
const lightbox = new SimpleLightbox(".gallery a", {
	captionsData: "alt",
	captionDelay: 250,
	// captionPostion: bottom
});



console.log(galleryItems);
