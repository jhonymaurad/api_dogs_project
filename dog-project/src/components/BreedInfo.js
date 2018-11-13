import React, {Component} from 'react';
import axios from 'axios';
const BASE_URL = 'https://api.thedogapi.com/v1/images/search?breed_id=2'

class BreedInfo extends Component {
  constructor(props){
    super(props);
    this.state={
      id: null,
      name:''
    }
  }

async getBreedInfo(){
    try{
      const data = await axios.get(`${BASE_URL}`);
      this.setState(
        {
          id: data.breeds.id,
          name:data.breeds.name
        }
      )
    }catch(error){
      console.log(error);
    }
  }

  async componentDidMount(){
    this.getBreedInfo();
  }
  render(){
    return(
      <div>
        <h2>{this.state.id}</h2>
        <h2>{this.state.name}</h2>
      </div>
    )
  }
}

export default BreedInfo;
