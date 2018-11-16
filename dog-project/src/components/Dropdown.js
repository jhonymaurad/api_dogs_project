import React, {Component} from "react";
import getDogData from '../services/DogData';
import BreedInfo from '../components/BreedInfo';

export default class Dropdown extends Component{
  constructor(props){
    super(props);
    this.state = {
      dogBreeds: [],
      value: 1
    };
this.handleChange = this.handleChange.bind(this);
  }

async componentDidMount(){
  const dogData = await getDogData();
  this.setState(
    {
      dogBreeds: dogData
    }
  )
}

handleChange(e){
    this.setState({
      value: e.target.value,
    });
}

  render(){
    return(
      <div>
        <div >
          <label >
            Select a breed:
            <select className='dropdownList' value={this.state.value} onChange={this.handleChange}>
              {
                this.state.dogBreeds.map(breed =>(
                  <option key={breed.id}
                          value={breed.id}
                    >{breed.name}</option>
                ))
              }
            </select>
          </label>
        </div>

        <BreedInfo breedid = {this.state.value} />
    </div>
    )
  }
}
