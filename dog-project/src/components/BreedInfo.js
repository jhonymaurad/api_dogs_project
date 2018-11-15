import React, {Component} from 'react';
import axios from 'axios';
const BASE_URL = 'https://api.thedogapi.com/v1/images/search?breed_id='

class BreedInfo extends Component {
  constructor(props){
    super(props);
    this.state={
      name:'',
      temperament:'',
      breed_group: "",
      life_span: "",
      bred_for: "",
      url: ''
    }
  }

async componentDidMount(){
    try{
      const data = await axios.get(`${BASE_URL}${this.props.breedid}`);
      console.log(data);
      this.setState(
        {

          name: data.data[0].breeds[0].name,
          temperament:data.data[0].breeds[0].temperament,
          breed_group: data.data[0].breeds[0].breed_group,
          life_span: data.data[0].breeds[0].life_span,
          bred_for: data.data[0].breeds[0].bred_for,
          url: data.data[0].url
        }
      )
    }catch(error){
      console.log(error);
    }
  }

  async componentDidUpdate(prevProps){
    if(this.props.breedid !== prevProps.breedid){
      const data = await axios.get(`${BASE_URL}${this.props.breedid}`);
      console.log(data);
      this.setState(
        {
          name: data.data[0].breeds[0].name,
          temperament:data.data[0].breeds[0].temperament,
          breed_group: data.data[0].breeds[0].breed_group,
          life_span: data.data[0].breeds[0].life_span,
          bred_for: data.data[0].breeds[0].bred_for,
          url: data.data[0].url
        })
      }
  }

  render(){
    return(
      <div>
        <img src= {this.state.url} style={{width:500}}/>
        <h2>Name: {this.state.name}</h2>
        <h3>{this.state.temperament}</h3>
        <h2>Breed Group: {this.state.breed_group}</h2>
        <h3>Originally Bred For: {this.state.bred_for}</h3>
        <h2>Life Span:{this.state.life_span}</h2>
      </div>
    )
  }
}

export default BreedInfo;
