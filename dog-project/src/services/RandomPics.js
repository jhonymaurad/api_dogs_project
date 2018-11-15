import axios from 'axios';

const BASE_URL_RANDOM = "https://dog.ceo/api/breed";

export default async function RandomPics(breed){
  try {
    const data = await axios.get(`${BASE_URL_RANDOM}/${breed}/images/random/3`);
    return data.data.message;
  } catch (e) {
    console.log(e);
  }
}
