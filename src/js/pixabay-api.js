import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '51378325-85b2545a081812b2976a73b54';

function getImagesByQuery(query) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  return axios
    .get(BASE_URL, { params })
    .then(response => {
      if (!response.status.toString().startsWith('2')) {
        throw new Error(`Помилка запиту: ${response.status}`);
      }
      return response.data;
    })
    .catch(error => {
      console.error(
        'Sorry, there are no images matching your search query. Please try again!',
        error.message
      );
      throw error;
    });
}

export { getImagesByQuery };
