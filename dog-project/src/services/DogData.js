import axios from 'axios';
const addressAllBreeds = 'https://api.thedogapi.com/v1/breeds?&page=0';


export default async function getDogData(){
  try {
    const dogData = await axios.get(`${addressAllBreeds}`);
    return dogData.data;
  } catch (error) {
    console.log(error);
  }
}
