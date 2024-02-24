function templatePhoto(photo) {
  const {
    largeImageURL,
    webformatURL,
    tags,
    likes,
    views,
    comments,
    downloads,
  } = photo;

  return `<li class='gallery-item'>
  <a class='gallery-link' href='${largeImageURL}'>
    <img
      class='gallery-image'
      src='${webformatURL}'
      alt='${tags}'
    />
  </a>
  <ul class="gallery-item-info">
    <li class='gallery-item-info-categories'>likes<span>${likes}</span></li>
    <li class='gallery-item-info-categories'>views<span>${views}</span></li> 
    <li class='gallery-item-info-categories'>comments<span>${comments}</span></li> 
    <li class='gallery-item-info-categories'>downloads<span>${downloads}</span></li> 
  </ul>  
</li>`;
}

export default function templatePhotos(photos) {
  return photos.map(templatePhoto).join('');
}
