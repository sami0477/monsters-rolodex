import React, { Component } from 'react'
import './App.css';
import { CardList } from './components/card-list/card-list.component' 
import { SearchBox } from './components/search-box/search-box.component'


class App extends Component {
  
  constructor() {
    super();  
    this.state = {
      monsters: [],
      searchField: ''
    }
  }
  
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState( { monsters: users } ))
  }

  handleChange = (e) => {
    this.setState( { searchField: e.target.value } )
  }

  render() {
    
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase()) ||
      monster.email.toLowerCase().includes(searchField.toLowerCase())  
    )

    return (
      <div className="App">
        <h1> Monsters Rolodex </h1>
        <SearchBox 
        placeholder='Search Monsters'
        handleChange={this.handleChange} 
        />
        <CardList monsters={filteredMonsters} /> 
      </div>
    )
  }
}


export default App;


// Import Assets
// Using class compnent we get acces to state
// super() calls constructor function onto our compnent class giving 
// us access to this.state on out class App
// State is an Object with properties
// Mounting is when react puts our component on the page for the 
// first time it calls a block of code we write
// Fetch() grabs the data from the given url and returns a promise
// Promise gives us a response
// Returns response in json format 
// Assigning users data to monsters and pushing it to the monsters array
// e => () represents the synthetic even occuring at the input field
// setState lags one letter behind when entering the value because
// it is an asynchronus call so it happend almost immediately
// Running the rest of the code after an asynchronous action or event
// is something that actually takes indefinite amount of time so js runs the
// rest of the code after and when the asynchronous event finishes it then 
// runs the finished event so to solve the lag behind issue of the input we 
// 