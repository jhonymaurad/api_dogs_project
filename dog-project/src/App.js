import React, { Component } from 'react';
import Welcome from './components/Welcome';
import './App.css';
import Dropdown from './components/Dropdown';
import NavBar from './components/NavBar';
import PostDog from './components/PostDog';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      currentView: 'welcome'
    }
    this.setView = this.setView.bind(this);
  }

  getView(){
    const view = this.state.currentView;
    switch (view) {

    case 'byBreeds': return <Dropdown/>
    break;

    case 'postDog': return <PostDog/>
    break;

    default:
    return<Welcome handleViewChange={this.setView}/>
    }
  }

  setView(view){
    this.setState({
      currentView: view
    });
  }
  render() {
    return (
      <div className="App">
        <NavBar handleViewChange={this.setView}/>
        {this.getView()}      
      </div>
    );
  }
}

export default App;
