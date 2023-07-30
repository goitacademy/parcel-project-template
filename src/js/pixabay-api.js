import axios from 'axios';

const ENDPOINT = 'https://pixabay.com/api';
const apiKey = '38549496-ce3c530a47f46968bba1c58ed';

export async function getCityImage(city) {
  const requestParams = `/?image_type=photo&orientation=horizontal&q=${city}&key=${apiKey}`;
  const response = await axios.get(`${ENDPOINT}${requestParams}`);
  return response.data.hits[0].largeImageURL;
}
