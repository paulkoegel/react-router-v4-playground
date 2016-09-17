import React, { Component } from 'react';
import './App.css';
import GithubUser from './components/GithubUser';

class App extends Component {
  render() {
    return (
      <div className="App">
        <GithubUser slug="bumi" />
      </div>
    );
  }
}

export default App;
