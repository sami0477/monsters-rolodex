import React, { Component } from 'react'
// Import Assets
import logo from './logo.svg';
import './App.css'; 


// Using class compnent we get acces to state
// State is an Object with properties
// super() calls constructor function onto our compnent class giving us access to this.state on out class App

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: 'Frankenstien'
        },
        {
          name: 'Dracula'
        },
        {
          name: 'Zombie'
        }
      ]
    }

  }

  // .map returns us the return of whatever function that we pass to it itterating over every elements 
  // in the array

  render() {
    return (
      <div className="App">
        { 
          this.state.monsters.map( monster => <h1>{ monster.name }</h1> )  
        } 
       </div>
    )
  }
}


export default App;
