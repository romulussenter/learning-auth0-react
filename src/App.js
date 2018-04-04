import React, { Component } from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import Auth from './services/auth';


//Components
import Home from './components/Home';
import Profile from './components/Profile';
import Callback from './components/Callback';
import PrivateRoute from './components/PrivateRoute'

class App extends Component {
  constructor() {
    super();
    this.auth = new Auth();
  }
  componentWillMount() {
    const { getProfile, userProfile } = this.auth;
    if (!userProfile) {
      getProfile((err, profile) => {
        
          this.setState({
            profile: profile
          });
        })      
      }
    
    
    else {
      this.setState({
        profile: userProfile
      });
    
  }
  handleAuthentication = (nextState, replace) => {
    if (/access_token|id_token|error/.test(nextState.location.hash)) {
      this.auth.handleAuthentication();

    }
  }
  render() {
    return (
      <div>
        <ul>
          <li >
            <Link to='/'>Home</Link>
          </li>
          <li style={{ display: this.auth.isAuthenticated() ? 'list-item' : 'none' }}>
            <Link to='/profile'>Profile</Link>
          </li>
          <li style={{ display: this.auth.isAuthenticated() ? 'none' : 'list-item' }}><button onClick={() => this.auth.login()}>Login</button></li>
          <li style={{
            display: this.auth.isAuthenticated() ? 'visible' : 'hidden',
            opacity: this.auth.isAuthenticated() ? 1 : 0
          }}><button onClick={() => this.auth.logout()}>Logout</button></li>
        </ul>
        <Route path='/' exact component={Home} />
        <PrivateRoute path='/profile' exact component={Profile} auth={this.auth} {...this.state} />
        <Route path='/callback' exact render={(props) => {
          this.handleAuthentication(props);
          return <Callback {...props} />
        }} />
      </div>
    );
  }
}}

export default App;
