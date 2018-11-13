import React, {Component} from "react";
import getDogData from '../services/DogData';
import BreedInfo from '../components/BreedInfo';

export default class Dropdown extends Component{
  constructor(props){
    super(props);
    this.state = {
      dogBreeds: [],
      value: 'Affenpinscher'
    };
this.handleChange = this.handleChange.bind(this);
this.handleSubmit = this.handleSubmit.bind(this);
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
    this.setState({value: e.target.value});
}

handleSubmit(e){
  e.preventDefault();
  alert("youu choice of breed is: "+ this.state.value)
}


  render(){
    return(
      <div>
      <form onSubmit={this.handleSubmit}>
        <label>
          choose a breed:
          <select value= {this.state.value} onChange={this.handleChange}>
            {
              this.state.dogBreeds.map(breed =>(
                <option key={breed.id}
                        value={breed.name}

                  >{breed.name}</option>
              ))
            }
          </select>
        </label>
        <input type='submit' value='submit'/>
      </form>

      <BreedInfo/>
    </div>
    )
  }
}
