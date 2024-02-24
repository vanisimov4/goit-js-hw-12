import getPhotosByText from './js/pixabay-api';
import templatePhotos from './js/render-functions';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const refs = {
  form: document.querySelector('.form'),
  loader: document.querySelector('.loader'),
  listImages: document.querySelector('ul.gallery'),
  btnLoadMore: document.querySelector('.btn-load-more'),
};

let page;
let query;
let maxPage;

refs.form.addEventListener('submit', handleFormSubmit);
refs.btnLoadMore.addEventListener('click', handleLoadMoreClick);

async function handleFormSubmit(event) {
  event.preventDefault();
  hideLoadBtn();
  query = refs.form.elements.text.value.trim();

  if (!query) {
    showError('Empty field');
    return;
  }

  page = 1;
  refs.listImages.innerHTML = '';
  showLoader();

  try {
    const data = await getPhotosByText(query, page);
    if (data.hits.length === 0) {
      showError(
        'Sorry, there are no images matching your search query. Please try again!'
      );
    }
    maxPage = Math.ceil(data.totalHits / 15);
    renderPhotos(data.hits);
  } catch (err) {
    showError(err);
  }

  lightbox.refresh();
  hideLoader();
  checkBtnVisibleStatus();

  refs.form.reset();
}

async function handleLoadMoreClick() {
  page += 1;
  showLoader();
  const data = await getPhotosByText(query, page);
  renderPhotos(data.hits);
  lightbox.refresh();
  hideLoader();
  checkBtnVisibleStatus();

  const height =
    refs.listImages.firstElementChild.getBoundingClientRect().height;
  window.scrollBy({ top: 2 * height, behavior: 'smooth' });
}

function renderPhotos(objPhotos) {
  const markup = templatePhotos(objPhotos);
  refs.listImages.insertAdjacentHTML('beforeend', markup);
}

function showLoadBtn() {
  refs.btnLoadMore.classList.remove('hidden');
}

function hideLoadBtn() {
  refs.btnLoadMore.classList.add('hidden');
}

function checkBtnVisibleStatus() {
  if (page >= maxPage) {
    hideLoadBtn();
    showError("We're sorry, but you've reached the end of search results.");
  } else {
    showLoadBtn();
  }
}

function showLoader() {
  refs.loader.classList.remove('hidden');
}

function hideLoader() {
  refs.loader.classList.add('hidden');
}

function showError(msg) {
  iziToast.error({
    messageColor: 'white',
    color: '#EF4040',
    position: 'topRight',
    message: msg,
  });
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
