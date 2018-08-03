import React, { Component } from 'react';
import './App.css';
import PlayersList from './components/PlayersList';

class App extends Component {
  constructor() {
    super();

    this.state = {
      players: [
        {
          name: 'Kunegunda',
          score: 5,
        },
        {
          name: 'Hildebrand',
          score: 0
        }
      ]
    }
  }
  render() {
    return(
      <div className="App">
        <PlayersList players={this.state.players} />
      </div>
    );
  }
}

export default App;
