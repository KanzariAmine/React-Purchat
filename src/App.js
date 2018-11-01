import React, { Component } from 'react';
import logo from './logo.svg';
import Coursesales from './components/courseSales'
import './App.css';

class App extends Component {
  render() {
    let courses = [
      {name: "Complete ios10 dev course", price: 199},
      {name: "Complete pentesting cours", price: 299},
      {name: "Complete front end dev course", price: 180},
      {name: "Bug Bounty and web app pentesting", price: 150}
    ];
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Cours Purchase page</h1>
        </header>
        <Coursesales items={courses}/>
      </div>
    );
  }
}

export default App;
