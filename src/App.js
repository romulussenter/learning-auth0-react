import React, { Component } from 'react';
import './App.css';

//Components
import Home from './components/Home';
import Profile from './components/Profile';

class App extends Component {
  render() {
    return (
      <div>
        Hello
        <Home />
        <Profile />
      </div>
    );
  }
}

export default App;
