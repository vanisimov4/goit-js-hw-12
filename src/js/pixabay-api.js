import axios from 'axios';

export default async function getPhotosByText(searchText) {
  const response = await axios.get('https://pixabay.com/api/', {
    params: {
      key: '42434197-39cd5bed035ab257afa598fe1',
      q: encodeURIComponent(`${searchText}`),
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  });
  return response.data;
}
