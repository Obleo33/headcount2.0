import React, { Component } from 'react';
import './App.css';
import HeadCount from '../HeadCount/HeadCount';

class App extends Component {
  render() {
    return (
      <div className="app">
        <HeadCount />
      </div>
    );
  }
}

export default App;
