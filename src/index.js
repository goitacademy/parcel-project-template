import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import debounce from 'lodash';
import Notiflix from 'notiflix';

const input = document.querySelector('.search_input');
const inputBtn = document.querySelector('.search_btn');
const gallery = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.load-more');
const test = document.querySelector('.test');

let page = 1;
const token = '31013883-7e533408573fc88cfcaf1cb55';
const imageType = 'photo';
const orientation = 'horizontal';
const safeSearch = true;

const lightbox = new SimpleLightbox('.gallery a');

loadMoreBtn.setAttribute('hidden', 'hidden');

const fetchImages = async (input, pageNumber) => {
  const baseUrl = `https://pixabay.com/api/?key=${token}&q=${input}&image_type=${imageType}&orientation=${orientation}&safesearch=${safeSearch}&page=${pageNumber}&per_page=40`;

  const response = await fetch(`${baseUrl}`);
  const responseObject = await response.json();

  loadMoreBtn.removeAttribute('hidden');
  return responseObject;
};

const renderImages = images => {
  const markup = images
    .map(
      image => `<div class="photo-card">
  <a href='${image.largeImageURL}'>
    <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy" />
  </a>
  <div class="info">
    <p class="info-item">
      <b>Likes</b> ${image.likes}
    </p>
    <p class="info-item">
      <b>Views</b> ${image.views}
    </p>
    <p class="info-item">
      <b>Comments</b> ${image.comments}
    </p>
    <p class="info-item">
      <b>Downloads</b> ${image.downloads}
    </p>
  </div>
</div>`
    )
    .join('');

  if (page === 1) {
    gallery.innerHTML = markup;
  } else {
    gallery.insertAdjacentHTML('beforeend', markup);
  }
  return page++;
};

inputBtn.addEventListener('click', async event => {
  event.preventDefault();

  page = 1;
  const inputValue = input.value.trim();

  try {
    const array = await fetchImages(inputValue, page);
    const arrayImages = [];
    array.hits.forEach(async image => {
      arrayImages.push(image);
    });

    const total = await array.totalHits;

    if (total > 0) {
      Notiflix.Notify.success(`Hooray! We found ${total} images.`);
    }
    if (total === 0) {
      throw new Error();
    }
    renderImages(arrayImages);
    lightbox.refresh();
  } catch (error) {
    gallery.innerHTML = '';
    Notiflix.Notify.failure(
      'Sorry, there are no images matching your search query. Please try again.'
    );
  }
});

loadMoreBtn.addEventListener('click', async () => {
  const inputValue = input.value.trim();
  try {
    const array = await fetchImages(inputValue, page);
    const arrayImages = [];
    array.hits.forEach(async image => {
      arrayImages.push(image);
    });
    renderImages(arrayImages);
    lightbox.refresh();
  } catch (error) {
    console.log(error.message);
  }
});