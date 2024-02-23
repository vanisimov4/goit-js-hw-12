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

refs.form.addEventListener('submit', handleFormSubmit);
refs.btnLoadMore.addEventListener('click', handleLoadMoreClick)


async function handleFormSubmit(event) {
  event.preventDefault();
  query = refs.form.elements.text.value.trim();

  if (!query) {
    alert('Empty');
    return;
  }
  page = 1;

  refs.loader.classList.remove('hidden');

  const data = await getPhotosByText(query, page);

      // if (data.hits.length === 0) {
      //   iziToast.error({
      //     messageColor: 'white',
      //     color: '#EF4040',
      //     position: 'topRight',
      //     message:
      //       'Sorry, there are no images matching your search query. Please try again!',
      //   });
  // }
  
    refs.listImages.innerHTML = '';
      renderPhotos(data.hits);
      refs.loader.classList.add('hidden');
      refs.btnLoadMore.classList.remove('hidden');
      lightbox.refresh();

    // .catch(error => {
    //   console.error(error);

  refs.form.reset();
}

async function handleLoadMoreClick() {
  page += 1;
  const data = await getPhotosByText(query, page);
       renderPhotos(data.hits);
}

function renderPhotos(objPhotos) {
  const markup = templatePhotos(objPhotos);
  refs.listImages.insertAdjacentHTML('beforeend', markup);
}



const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
