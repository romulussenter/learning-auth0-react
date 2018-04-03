import React, { Component } from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import Auth from './services/auth';


//Components
import Home from './components/Home';
import Profile from './components/Profile';

class App extends Component {
  constructor(){
    super();
    this.auth = new Auth();
  }
  componentDidMount(){
    this.auth.login();
  }
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/profile'>Profile</Link>
          </li>
        </ul>
        <Route path='/' exact component={Home} />
        <Route path='/profile' exact component={Profile} />
      </div>
    );
  }
}

export default App;
