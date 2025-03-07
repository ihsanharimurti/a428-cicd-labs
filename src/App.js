import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fact: 'Click the button to see a random fact!'
    };
  }

  facts = [
    'Bananas are berries, but strawberries are not.',
    'Honey never spoils.',
    'Octopuses have three hearts.',
    'A day on Venus is longer than a year on Venus.',
    'Water can boil and freeze at the same time!.'
  ];

  handleClick = () => {
    const randomFact = this.facts[Math.floor(Math.random() * this.facts.length)];
    this.setState({ fact: randomFact });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React!!!</h1>
        </header>
        <p className="App-intro">{this.state.fact}</p>
        <button onClick={this.handleClick}>Show Random Fact</button>
      </div>
    );
  }
}

export default App;
