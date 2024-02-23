import axios from 'axios';

export default async function getPhotosByText(query, currentPage) {
  const BASE_URL = 'https://pixabay.com';
  const END_POINT = '/api/';
  const url = BASE_URL + END_POINT;

  const params = {
    key: '42434197-39cd5bed035ab257afa598fe1',
    q: encodeURIComponent(query),
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 15,
    page: currentPage,
  };

  const response = await axios.get(url, { params });
  return response.data;
}
