import React, { Component } from 'react';

import './App.css';
import getDogData from './services/DogData';

class App extends Component {

  async componentDidMount(){
    const dogData = await getDogData();
    console.log(dogData);
  }
  
  render() {
    return (
      <div className="App">


      </div>
    );
  }
}

export default App;
