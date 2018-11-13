import axios from 'axios';
import moment from 'moment';
const address = 'https://api.thedogapi.com/v1/breeds/2';

async function getDogData(){
  try {
    const dogData = await axios.get(`${address}`);
    return dogData;

  } catch (error) {
    console.log(error);
  }
}
export default getDogData;
