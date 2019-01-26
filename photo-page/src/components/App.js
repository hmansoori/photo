import React, { Component } from 'react';
import logo from '../logo.svg';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import * as routes from '../constants/routes';
import '../css/App.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div>
  
        <Route exact path={routes.ABOUT} component={() => <AboutPage />} />
        <Route exact path={routes.PHOTOS} component={() => <PhotoPage />} />
        <Route exact path={routes.CONTACT} component={() => <ContactPage />} />

      </div>
    </Router>
    );
  }
}

export default App;
