import React, {Component} from 'react';
import axios from 'axios';
import RandomPics from '../services/RandomPics';
import Pictures from './Pictures';
const BASE_URL_ALL = 'https://dog.ceo/api/breeds/list/all';

class RandomPic extends Component{
  constructor(props){
    super(props);
    this.state={
      allBreeds: [],
      picsUrl:[],
      value:"affenpinscher"
    }
    this.handleChange = this.handleChange.bind(this);
  }

async componentDidMount(){
  try {
    const allBreedsData = await axios.get(`${BASE_URL_ALL}`);
    const urls = await RandomPics(this.state.value);
    this.setState(
      {
        allBreeds : allBreedsData.data.message,
        picsUrl: urls
      }
    )

  } catch (e) {
    console.log(e);
  }
}

async componentDidUpdate(prevProps, prevState){
  if(this.state.value !== prevState.value){

    const allBreedsData = await axios.get(`${BASE_URL_ALL}`);
    const urls = await RandomPics(this.state.value);
    this.setState(
      {
        allBreeds : allBreedsData.data.message,
        picsUrl : urls
      }
    )
  }
}

handleChange(e){
  this.setState({
    value: e.target.value
  })
}
render(){
  const allBreedsArr = Object.keys(this.state.allBreeds);
  return(
    <div>
      <div>
        <label>
          Display images for which breed:
          <select className='dropdownList'
                  onChange={this.handleChange}
                  value={this.state.value}>
            {
              allBreedsArr.map((breed, index) => (
                <option key={index}
                        value={breed}
                  >{breed}</option>
              ))
            }
          </select>
        </label>
      </div>

      <Pictures urls={this.state.picsUrl}/>
    </div>
  )
}
}
export default RandomPic;
